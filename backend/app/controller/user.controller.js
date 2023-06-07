require('dotenv').config();
const User          = require('../../models/user.models');
const bcryptjs      = require('bcryptjs');
const jsonwebtoken  = require('jsonwebtoken');

exports.DaftarUser = async (req, res) => {
    const { username, email, password } = req.body;

    const usernameUser = await User.findOne({username: username})
    const emailUser = await User.findOne({email: email})

    if(usernameUser) {
        return res.status(404).json({
            status: false,
            message: 'username sudah tersedia'
        })
    }

    if(emailUser) {
        return res.status(404).json({
            status: false,
            message: 'email sudah tersedia'
        })
    }

    const hashPassword = await bcryptjs.hash(password, 10)
    const user = new User({
        username    : username,
        email       : email,
        password    : hashPassword,
    })

    user.save()

    return res.status(201).json({
        status: true,
        message: 'User berhasil didaftarkan'
    });
};

exports.LoginUser = async (req, res) => {
    const { username, password } = req.body

    const dataUser = await User.findOne({$or: [{username: username}, {email: username}]}) 
    if(dataUser){
        // Jika username ada lanjut ke proses berikutnya
        const passwordUser = await bcryptjs.compare(password, dataUser.password)
        if(passwordUser){
            //Jika password ada masuk ke proses ini
            const data = {
                id: dataUser._id
            }
            const token = await jsonwebtoken.sign(data, process.env.JWT_SECRET)
            return res.status(200).json({
                message: 'berhasil',
                token: token
            })
        } else {
            return res.status(404).json({
                status: false,
                message: "password tidak sama"
            })
        }
    } else {
        return res.status(404).json ({
            status: false,
            message: "username atau email tidak tersedia"
        })
    }
}

exports.getUser = async (req, res) => {
    const user = await User.findOne({_id: req.id})
    return res.status(200).json({
        message: 'berhasil di panggil',
        data: user
    })
}
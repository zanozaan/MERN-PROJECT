const express                   = require('express')
const router                    = express.Router()
const { DaftarUser, LoginUser, getUser } = require('../app/controller/user.controller')
const { runValidation, validationDaftar, validationLogin } = require('../validation')
const middleware = require('../middleware/middleware')

router.post('/daftar', validationDaftar, runValidation, DaftarUser)
router.post('/login', validationLogin, runValidation, LoginUser)
router.get('/user', middleware, getUser)

module.exports = router  
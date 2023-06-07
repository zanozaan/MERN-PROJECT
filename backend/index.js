require('dotenv').config();
const path      = require('path')
const express   = require('express');
const app       = express();
const RouteUser = require('./routes/User');
const RouteMovie = require('./routes/Movie');
const mongoose  = require('mongoose');
const cors      = require('cors');
const PORT      = 3001;
 
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
mongoose.set("strictQuery", false);

const DB = process.env.MONGO_URL;
mongoose
  .connect(DB, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true })

  .then(() => {
    console.log("Koneksi DB berhasil");
  })
  .catch((error) => {
    console.error("Kesalahan koneksi DB:", error);
  });

app.use(cors())
app.use('/', RouteUser);
app.use('/', RouteMovie);

app.listen(process.env.PORT, () => {
    console.log(`Server berjalan pada port ${process.env.PORT}`);
  });
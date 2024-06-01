require('dotenv').config()

const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const multer  = require('multer')
const path = require('path')
const mongoose = require('mongoose')
const ImageModel = require('./models/Imagemodel')
const userAuthRoutes = require('./routes/user')
const cookieParser = require('cookie-parser')

// =============================================================
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
// =============================================================


// ========================FileStorage================================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'fakepath/Images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage })
// ========================FileStorage================================


// ================================App Config===================================
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))
app.use(express.static('fakepath'))
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
// ================================App Config===================================



// ====================================Routes=====================================

app.get('/', (req, res) => {
  res.send('success');
})

app.use('/api/user', userAuthRoutes)

app.post('/upload', upload.single('file'), (req, res) => { 
  console.log(req);
  ImageModel.create({image: req.file.filename})
    .then(result => res.json(result).status(200))
    .catch(error => console.log(error))

})

app.post('/signin', (req,res) => { signin.handleSignin(req, res, db, bcrypt) })
app.post('/register', (req,res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req,res) => { profile.handleProfile(req, res, db) })
app.put('/image', (req, res) => { image.handleImage(req, res, db) })
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })
// ====================================Routes=====================================



// =========================MongoDB Connection=============================
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
// =========================MongoDB Connection=============================



// ===========================================================
/*
  / -->res = Hey server is at Root
  /signin --> POST -->SUCCESS/FAIL
  /register --> POST -->user
  /profile/:userId --> GET = user
  /image --> PUT --> user
*/
// ===========================================================

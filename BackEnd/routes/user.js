const express = require('express');
const cors = require('cors')

// Auth setUp
const {
    loginUser,
    signupUser,
    JwtVerify
} = require('../controllers/userController')

const router = express.Router();

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)
router.get('/profile', JwtVerify)

module.exports = router;
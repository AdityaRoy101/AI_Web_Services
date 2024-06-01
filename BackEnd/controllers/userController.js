const UserSchema = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id, email, password, name) => {
    return jwt.sign({_id, email, password, name}, process.env.SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async(req, res) => {
    
    const {email, password} = req.body

    try {
        const user = await UserSchema.login(email, password)

        // Creating a JWT Token
        const token = createToken(user._id, user.email, user.password, user.name)

        // res.status(201).json({ email, token })
        res.cookie('token',token).json(user)
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}

// signup user
const signupUser = async(req, res) => {

    const { name, email, password } = req.body;

    try {
        const user = await UserSchema.signup(name, email, password)

        // Creating a JWT Token
        const token = createToken(user._id)

        res.status(201).json({ name, email, token })
    } catch (error) {
        res.status(200).json({ error: error.message })
        // return error
    }
}

// JWT user
const JwtVerify = (req, res) => {

    const {token} = req.cookies

    if(token){
        jwt.verify(token, process.env.SECRET, {}, (err,user) => {
            if(err) throw err
            res.json(user)
        })
    }else{
        res.json(null)
    }
}

module.exports = {
    loginUser,
    signupUser,
    JwtVerify
}
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const validator = require('validator');

// User Schema Defination
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })


// static signup method
userSchema.statics.signup = async function(name, email, password) {
    
    // Email and Password Validation
    if(!name || !email || !password){
        throw Error("All fields must be filled")
    }
    if(!validator.isEmail(email)){
        throw Error("Email is not Valid")
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password is not strong enough")
    }

    // ========================

    const exists = await this.findOne({ email })

    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ name, email, password: hash })

    return user;
}

// Static Login Method
userSchema.statics.login = async function(email, password){

    // Email and Password Validation
    if(!email || !password){
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({ email })

    if(!user){
        throw Error("Incorrect Email")
    }

    // Password Matching
    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error("Incorrect Password")
    }

    return user
}
module.exports = mongoose.model('UserSchema', userSchema);
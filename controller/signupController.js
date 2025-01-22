const express =require("express");
const User = require("../model/userSchema");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const signupController = async (req,res) =>{
    try{
        const newUser = new User({
            username : req.body.username,
            number :req.body.number,
            email : req.body.email,
            password : cryptoJS.AES.encrypt(req.body.password,process.env.PASSWORD_SECURITY_KEY).toString()
        });

        const SavedInUserDB = await newUser.save();
        res.status(201).json(SavedInUserDB);

    }catch(err)
    {
        res.status(500).json({message : " error in creating the user"});
    }
}

module.exports =signupController;
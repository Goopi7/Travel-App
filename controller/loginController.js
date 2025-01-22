const express =require("express");
const User = require("../model/userSchema");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const loginController =  async (req,res) =>{
    try{
        const user = await User.findOne({number : req.body.number});
        !user && res.status(401).json({message:"Incorrect number"});
       
        const decryptPassword = cryptoJS.AES.decrypt(user.password,process.env.PASSWORD_SECURITY_KEY).toString(cryptoJS.enc.Utf8);
        console.log(decryptPassword);
        decryptPassword !== req.body.password && res.status(401).json({message:"Incorrect password"});

        const { password,...rest} =user._doc;

        const accessToken = jwt.sign({username:user.username} ,process.env.ACCESS_TOKEN)
        res.json({...rest,accessToken});

    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = loginController;
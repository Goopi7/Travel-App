const express =require("express");
const User = require("../model/userSchema");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const signupController = require("../controller/signupController");


const router =express.Router();

router.route("/register")
    .post(signupController)

router.route("/login")
    .post()



module.exports =router;
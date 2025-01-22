const express  = require("express");
const router = express.Router();
const hotelController = require("../controller/hotelCrontroller")


router.route("/")
    .get(hotelController);

module.exports=router;
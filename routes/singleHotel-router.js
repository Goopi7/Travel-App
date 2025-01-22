const express = require("express");
const router =express.Router();
const singleHotelController = require("../controller/singleHotelController")


router.route("/:id")
    .get(singleHotelController);

module.exports = router;

const express = require("express");
const router =express.Router();
const verifyUser = require("../middleware/verfiyUser")
const { createWishlistController , deleteWishlistCrontroller , getWishlistCrontroller } = require("../controller/wishlistController")

router.route("/")
    .post(verifyUser , createWishlistController );

    router.route("/:id")
    .delete ( verifyUser , deleteWishlistCrontroller)

router.route("/")
    .get( verifyUser , getWishlistCrontroller )

module.exports =router;

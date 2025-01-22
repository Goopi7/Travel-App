const express  = require("express");
const router = express.Router();
const categoryController = require ("../controller/categoryCrontroller")

router.route("/")
    .get( categoryController);

    module.exports = router;
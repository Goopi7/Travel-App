const express =require("express");
const categories= require("../data/category.js")
const Category = require("../model/categorySchema")
const router =express.Router();
router.route("/")
    .post(async(req,res) =>{
    try{
        await Category.deleteMany({});
        const categoryInDB = await Category.insertMany(categories.data);
        res.json(categoryInDB);
    }
    catch(err)
    {
        console.log(err);
        res.json({message : "could not add category to DB"});
    }
})

module.exports = router;
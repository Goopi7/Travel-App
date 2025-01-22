const express =require("express");


const hotels= require("../data/hotels")
const Hotel = require("../model/hotelSchema")
const router =express.Router();
router.route("/")
    .post(async(req,res) =>{
    try{
        await Hotel.deleteMany({});
        const hotelInDB = await Hotel.insertMany(hotels.data);
        res.json(hotelInDB);
    }
    catch(err)
    {
        console.log(err);
        res.json({message : "could not add data to DB"});
    }
})

module.exports = router;
const mongoose  = require("mongoose");

const wishlistSchema=mongoose.Schema({
    hotelid :{type:String,require:true},
})

const Wishlist = mongoose.model("Wishlist",wishlistSchema);

module.exports=Wishlist;
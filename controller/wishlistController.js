
const Wishlist = require("../model/wishlistSchema");


const createWishlistController = async (req,res) =>{
    const newWishlist = new Wishlist(req.body);
    try{
        const saved = await newWishlist.save();
        res.status(201).json(saved);
}catch(err){
    console.log(err);
    res.status(500).json({message:"fauled to create wishlist"});

}
}

const deleteWishlistCrontroller = async (req,res) =>{
            
    try{
         await Wishlist.findByIdAndDelete(req.params.id);
        res.json({meassage :"hotel with id is deleted"});
}catch(err){
    console.log(err);
    res.status(500).json({message:"could not find in the wishlist"});

}
}

const getWishlistCrontroller = async (req,res) =>{
    try{
        const wishlist = Wishlist.find({});
        wishlist ? res.json(wishlist) : res.json({message :" no wishlist found"});
    }
    catch(err){
        console.log(err);
        res.json(err).status(500);
    }
}

module.exports = { createWishlistController , deleteWishlistCrontroller , getWishlistCrontroller}

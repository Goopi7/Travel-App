const Hotel = require("../model/hotelSchema");

const hotelController = async (req,res) =>{ 
    const hotelCategory = req.query.category;    //https...../api/hotels?category= " name "
   try{
    let hotels;

    if(hotelCategory)
    {
        hotel =await  Hotel.find({category : hotelCategory})
    }
    else{
        hotels= await Hotel.find({});
    }


    
    hotels ? res.json(hotels) : res.status(404).json({message: "no data Found"})
   }catch(err)
{
    console.log(err);
} 
}

module.exports = hotelController;
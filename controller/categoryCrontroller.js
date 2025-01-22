
const Category = require("../model/categorySchema");
const categoryController = async (req,res) =>{

    try{
        const categories = await Category.find({});
        res.json(categories);
    }
    catch(err)
    {   res.status(404).json({meassage :" could not find category"})
        console.log(err)
    }

}

module.exports = categoryController;
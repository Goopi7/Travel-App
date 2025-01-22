const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./configs/dbConfig")
const hotelRouter =require("./routes/hotel-routes");
const categoryRouter =require("./routes/caterory-router")
const hotelDataAddedToDB = require("./routes/hotelimportdata-router")
const categoryDataAddedToDB =require("./routes/categoryimportdata-router")
const singleHotelRouter = require("./routes/singleHotel-router")
const authRouter = require("./routes/user-router")
const WishlistRouter = require("./routes/wishlist-router")

const app = express();

dotenv.config();
const PORT = 3200;

app.use(express.json());
connectDB();
app.get("/",(req,res) =>{
    res.send("hello");
})


app.use("/api/hotelsdata", hotelDataAddedToDB);
app.use("/api/categorydata" , categoryDataAddedToDB);
app.use("/api/hotels",hotelRouter);
app.use("/api/category" , categoryRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth",authRouter);
app.use("/api/wishlist",WishlistRouter);


mongoose.connection.once("open" ,()=>{
app.listen(process.env.PORT || PORT , () =>{
    console.log("connected to port");
    console.log(`server is listening at port no: ${PORT}`);
});
})


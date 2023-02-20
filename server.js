// IMPORT DEPENDENCIES
const express = require ("express");
const app = express();
require("dotenv").config();
const cors = require ("cors");
const mongoose = require("mongoose")
const fileUpload = require("express-fileupload");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(
    fileUpload({
    useTempFiles: true,
})
);


// CONNECT TO BD

const URL = process.env.MONGODB_URL
mongoose.set('strictQuery', true);
mongoose.connect(URL, {
   
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('BBDD is now connected')
})

// IMPORT ROUTES

const ProductRouter = require("./routes/ProductRouter");
const CategoryRouter = require("./routes/CategoryRouter");
const ImageRouter = require("./routes/ImageRouter");

// ROUTES

app.use("/api", ProductRouter);
app.use("/api", CategoryRouter);
app.use("/api", ImageRouter)

app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
});
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    // UUID: {
    //     type: Number,
    // },
   
    title: {
        type: String,
        maxlenght: 50,
        minlength: 3,
        required: true
    },
    description: {
        type: String,
        maxlenght: 450,
        minlength: 10,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
     image:{
        type: Object,
        required:true
    },
    category:{
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Product", productSchema);
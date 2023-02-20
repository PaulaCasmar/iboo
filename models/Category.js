const mongoose = require ("mongoose"); 

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 50,
        minlength: 5,
        required: true
    },
    image:{
        type: Object,
        required:true
    },

    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }]
     
    
}, {timestamps:true});

module.exports = mongoose.model("Category", categorySchema);
const express = require ("express");
const Category = require ("../models/Category");
const CategoryRouter = express.Router();
const auth = require ("../middleware/auth");
const authAdmin = require ("../middleware/authAdmin");

CategoryRouter.post("/category", async (req, res)=>{
    const {title, image} = req.body
try {
    const category = await Category.findOne({title})
        if (category) {
            return res.status(400).json({
                success: false,
                message: "Category already exists"
            })
            
        }
    if (!title) {
        return res.status(400).json({
            success: false,
            message: "Title is required"
        });
    }
    

    if (title.length < 5) {
        return res.status(400).json({
            success: false,
            message: "Title must be more than 5 characters"
        });
    }

    if (title.length > 50) {
        return res.status(400).json({
            success: false,
            message: "Title must be less than 50 characters"
        });
    }

    let categoria = new Category({
        title,
        image
    })

    await categoria.save()
    return res.status(200).json({
        success: true,
        categoria,
        message: "Category created successfully"
    })

    
} catch (error) {
    return res.status(500).json({
        success: false,
        message: error.message
    });
}
});

CategoryRouter.get("/categories", async (req, res) =>{
    try {
        let categorias = await Category.find({})
        return res.status(200).json({
            success: true,
            categorias
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
})


CategoryRouter.get("/category/:id", async (req, res)=>{
    const {id} = req.params
    try {
        let categoria = await Category.findById(id).populate({path:"products", select:"title price image"});
        return res.status(200).json({
            success: true, 
            categoria
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: error.message
        })
    }
})

module.exports = CategoryRouter;
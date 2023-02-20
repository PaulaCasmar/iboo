const express = require("express")
const ImageRouter = express.Router();
const cloudinary = require("cloudinary")
const fs = require("fs");


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

ImageRouter.post("/upload", (req, res) => {
    try {
        console.log(req.files)
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({
                success: false,
                message: "No files were upload"
            })
        }

        const file = req.files.file;
        if (file.size > 1024 * 1024) {
            removeTmp(file.tempFilePath);
            return res.status(400).json({
                success: false,
                message: "Size too large"
            })


        }

        if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png" && file.mimetype !== "image/jpg" && file.mimetype !== "image/svg") {
            removeTmp(file.tempFilePath);
            return res.status(400).json({
                success: false,
                message: "Incorrect image format"
            })
        }

        cloudinary.v2.uploader.upload(file.tempFilePath, {
                folder: "Pam"
            },
            async (error, result) => {
                if (error) throw error;
                removeTmp(file.tempFilePath);

                res.json({
                    success: true,
                    message: "Image uploaded successfully",
                    public_id: result.public_id,
                    url: result.secure_url
                });
            }
        );

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
});


ImageRouter.post("/destroy", (req, res) => {
    try {
        const {
            public_id
        } = req.body;
        if (!public_id)
            return res.status(400).json({
                success: false,
                message: "No image selected"
            });

        cloudinary.v2.uploader.destroy(public_id, async (error, result) => {
            if (error) throw error;
            res.json({
                success: true,
                message: "Image deleted successfully"
            })
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }


})

const removeTmp = (path) => {
    fs.unlink(path, (error) => {
        if (error) throw error;
    })
};

module.exports = ImageRouter
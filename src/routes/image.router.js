const express = require('express');
const Image = require('../models/image.model');
const router = express.Router();

router.post('/upload/:id', async (req, res) => {
    try {
        // Check if file was uploaded
        console.log(req.files);
        if (!req.files || !req.files.file) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }
        const imageFile = req.files.file;
  
        // Move the uploaded file to the upload path
        // Create a new image entry in the database
        const image = await Image.create({
            name: imageFile.name,
            data:imageFile.data ,// Save the path or just name
            mimetype: imageFile.mimetype,
            size: imageFile.size,
            product_id:req.params.id
        });
  
        res.status(201).json({ message: 'Image uploaded successfully', image });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error uploading image' });
    }
  });
  module.exports = router;
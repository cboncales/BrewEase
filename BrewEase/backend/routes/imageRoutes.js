import express from "express";
import cloudinary from "../utils/cloudinary.js"; // Import the configured Cloudinary object
import fs from "fs";

const router = express.Router();

// POST endpoint to upload an image
router.post("/upload", async (req, res) => {
  const { filePath } = req.body; // Assume filePath is sent in the request body

  if (!filePath) {
    return res.status(400).json({ error: "File path is required" });
  }

  try {
    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(filePath);
    console.log("Image uploaded successfully:", result.secure_url);

    // Return the image URL to the client
    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Failed to upload image" });
  }
});

export default router;

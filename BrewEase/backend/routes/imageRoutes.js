import express from "express";
import cloudinary from "../utils/cloudinary.js";
import fs from "fs";
import pkg from "pg";
const { Pool } = pkg;

const router = express.Router();
const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "BrewDB",
  password: process.env.DB_PASSWORD || "2001",
  port: process.env.DB_PORT || 5432,
});

// POST endpoint to upload an image and store the URL in PostgreSQL
router.post("/upload", async (req, res) => {
  const { filePath, coffeeId } = req.body; // Expecting coffeeId for database reference

  if (!filePath || !coffeeId) {
    return res
      .status(400)
      .json({ error: "File path and coffeeId are required" });
  }

  try {
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(filePath);
    console.log("Image uploaded:", result.secure_url);

    // Store the image URL in PostgreSQL
    await pool.query("UPDATE coffees SET image_url = $1 WHERE id = $2", [
      result.secure_url,
      coffeeId,
    ]);

    res.json({
      message: "Image uploaded and saved",
      imageUrl: result.secure_url,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Failed to upload image" });
  }
});

export default router;

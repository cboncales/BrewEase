// import express from "express";
// import cors from "cors";
// import imageRoutes from "./routes/imageRoutes.js";
// import dotenv from "dotenv";
// import pkg from "pg";
// const { Pool } = pkg;

// Load environment variables
// dotenv.config();

// const app = express();
// const port = 5000;

// Enable CORS
// app.use(cors());

// Parse JSON bodies
// app.use(express.json());

// Use the image upload route
// app.use("/api/images", imageRoutes);

// PostgreSQL connection configuration
// const pool = new Pool({
//   user: process.env.DB_USER || "postgres",
//   host: process.env.DB_HOST || "localhost",
//   database: process.env.DB_NAME || "BrewDB",
//   password: process.env.DB_PASSWORD || "2001",
//   port: process.env.DB_PORT || 5432,
// });

// Test database connection
// pool.query("SELECT NOW()", (err, res) => {
//   if (err) {
//     console.error("Error connecting to the database", err);
//   } else {
//     console.log("Connected to the database at", res.rows[0].now);
//   }
// });

// Fetch coffee data with full image URLs
// app.get("/api/coffees", async (req, res) => {
//   try {
//     const result = await pool.query(
//       "SELECT id, name, price, description, image_url FROM coffees"
//     );
//     res.json(result.rows); // Now directly returning image_url from DB
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Server error");
//   }
// });

// Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

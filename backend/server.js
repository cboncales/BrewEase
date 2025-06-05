import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import coffeeRoutes from "./routes/coffeeRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: ["http://localhost:8000", "http://localhost:5173"], // Allow requests from both production and dev frontends
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow necessary HTTP methods
  credentials: true, // Allow cookies if needed
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/coffees", coffeeRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/auth", authRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

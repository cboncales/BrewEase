import express from "express";
import { getCoffees } from "../controllers/coffeeController.js";

const router = express.Router();

router.get("/", getCoffees);

export default router;

import pool from "../config/db.js";

export const getCoffees = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, price, description, image_url FROM coffees"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching coffees:", err);
    res.status(500).send("Server error");
  }
};

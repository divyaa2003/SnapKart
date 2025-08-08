import express from "express";
const router = express.Router();
import Product from "../models/product.model.js"; // adjust path if needed

// Mood-to-category mapping
const moodMap = {
  happy: ["Snacks", "Ice Cream", "Cold Drinks"],
  tired: ["Coffee", "Tea", "Energy Drinks"],
  stressed: ["Chocolate", "Ice Cream", "Tea"],
  healthy: ["Fruits", "Vegetables", "Salads"],
  sad: ["Chocolate", "Comfort Food", "Soup"]
};

router.post("/", async (req, res) => {
  const { mood } = req.body;
  if (!mood) return res.status(400).json({ message: "Please provide a mood" });

  try {
    const categories = moodMap[mood.toLowerCase()];
    if (!categories) {
      return res.status(404).json({ message: "No suggestions for this mood" });
    }

    // Find products that match the mood categories
    const products = await Product.find({
      category: { $in: categories }
    }).limit(10);

    return res.json({
      mood,
      categories,
      products
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

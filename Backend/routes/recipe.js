const express = require("express");
const { authenticateToken } = require("../middlewares/authMiddleware");
const Recipe = require("../models/Recipe");
const upload = require("../middlewares/upload");

const router = express.Router();

// Create a Recipe
// router.post("/", authenticateToken, async (req, res) => {
//   const { title, ingredients, instructions, cuisine, cookingTime } = req.body;

//   try {
//     const newRecipe = new Recipe({
//       title,
//       ingredients,
//       instructions,
//       cuisine,
//       cookingTime,
//       author: req.user.id,
//     });
//     const savedRecipe = await newRecipe.save();
//     res
//       .status(201)
//       .json({ message: "Recipe created successfully", recipe: savedRecipe });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
router.post("/", authenticateToken, upload.single("image"), async (req, res) => {
  const { title, ingredients, instructions, cuisine, cookingTime } = req.body;
  try {
    const newRecipe = new Recipe({
      title,
      ingredients: ingredients.split(","), // Convert ingredients to array
      instructions,
      cuisine,
      cookingTime,
      image: req.file ? req.file.path : null, // Check if the file is properly uploaded
      author: req.user.id,
    });
    const savedRecipe = await newRecipe.save();
    res
      .status(201)
      .json({ message: "Recipe created successfully", recipe: savedRecipe });
  } catch (err) {
    console.error("Error saving recipe:", err.message); // Log the error
    res.status(500).json({ error: "Server error occurred" });
  }
});


// Get All Recipes
router.get("/", authenticateToken, async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("author", "username email");
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Recipe by ID
router.get("/:id", authenticateToken, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate(
      "author",
      "username email"
    );
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Recipe
router.put("/:id", authenticateToken, upload.single("image"), async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    // Only the author can update the recipe
    if (recipe.author.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You can only update your own recipes" });
    }

    // If a new image is provided, update the image path
    if (req.file) {
      recipe.image = req.file.path; // Update the image path if a new image is uploaded
    }

    // Update the recipe data
    recipe.title = req.body.title || recipe.title;
    recipe.ingredients = req.body.ingredients || recipe.ingredients;
    recipe.instructions = req.body.instructions || recipe.instructions;
    recipe.cuisine = req.body.cuisine || recipe.cuisine;
    recipe.cookingTime = req.body.cookingTime || recipe.cookingTime;

    const updatedRecipe = await recipe.save();
    res.status(200).json({ message: "Recipe updated successfully", recipe: updatedRecipe });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Recipe
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    // Only the author or an admin can delete the recipe
    if (recipe.author.toString() !== req.user.id && req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "You can only delete your own recipes." });
    }

    await recipe.deleteOne();
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

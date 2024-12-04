// const mongoose = require("mongoose");

// const recipeSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     ingredients: { type: [String], required: true },
//     instructions: { type: String, required: true },
//     cuisine: { type: String, required: true },
//     cookingTime: { type: Number, required: true },
//     author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Recipe", recipeSchema);
const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    cuisine: { type: String, required: true },
    cookingTime: { type: Number, required: true },
    image: { type: String }, // New field to store the image path or URL
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
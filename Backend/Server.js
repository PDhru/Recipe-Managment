const database = require("./config/database");
const express = require("express");
const Config = require("./config");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const recipeRoutes = require("./routes/recipe");

const dotenv = require("dotenv");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use("/uploads", express.static("uploads"));

const PORT = Config.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.use("/api/recipes", recipeRoutes);

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  database();
  console.log("Server is running on localhost" + PORT);
});

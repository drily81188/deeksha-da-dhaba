const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT;
const DB = process.env.DB;

mongoose
  .connect(DB)
  .then(() => {
    console.log("mongo jaanemane runing");
  })
  .catch((err) => {
    console.log(err);
  });

const categorySechma = new mongoose.Schema({
  idCategory: { type: Number, require: true },
  strCategory: { type: String, require: true },

  strCategoryThumb: { type: String, require: true },

  strCategoryDescription: { type: String, require: true },
});

const cateSechma = new mongoose.Schema({
  strMeal: { type: String, require: true },
  strMealThumb: { type: String, require: true },
  idMeal: { type: Number, require: true },
});
const categoryModel = new mongoose.model("category", categorySechma);
const beefModel = new mongoose.model("beef", cateSechma);
const breakfastModel = new mongoose.model("breakfast", cateSechma);
const starterModel = new mongoose.model("starter", cateSechma);
const veganModel = new mongoose.model("vegan", cateSechma);
const vegarineModel = new mongoose.model("vegterain", cateSechma);
const app = express();
app.use(express.json());

app.get("/category", async (req, res) => {
  const data = await categoryModel.find();
  res.status(201).json({
    status: "success",
    response: data,
  });
});
// /category/
app.get("/category/beef", async (req, res) => {
  const data = await beefModel.find();
  res.status(201).json({
    status: "success",
    response: data,
  });
});
app.get("/category/breakfast", async (req, res) => {
  const data = await breakfastModel.find();
  res.status(201).json({
    status: "success",
    response: data,
  });
});
app.get("/category/starter", async (req, res) => {
  const data = await starterModel.find();
  res.status(201).json({
    status: "success",
    response: data,
  });
});
app.get("/category/vegan", async (req, res) => {
  const data = await veganModel.find();
  res.status(201).json({
    status: "success",
    response: data,
  });
});
app.get("/category/vegetrain", async (req, res) => {
  const data = await vegarineModel.find();
  res.status(201).json({
    status: "success",
    response: data,
  });
});

app.listen(PORT, (req, res) => {
  console.log("server is runing");
});

import express from "express";
import { recipeController } from "./controller";

const recipeRouter = express.Router();

const { createRecipe, getRecipes, getRecipe, editRecipe, deleteRecipe } = recipeController;

recipeRouter.get("/", getRecipes);
recipeRouter.get("/:id", getRecipe);
recipeRouter.post("/create", createRecipe);
recipeRouter.delete("/delete/:id", deleteRecipe);
recipeRouter.put("/edit/:id", editRecipe);

export default recipeRouter;
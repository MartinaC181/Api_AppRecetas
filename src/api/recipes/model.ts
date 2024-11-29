import { Schema, model } from "mongoose";
import { IRecipe } from "./type";
import { ObjectId } from "mongodb";

const recipeSchema = new Schema<IRecipe>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: [String], required: true },
    steps: { type: [String], required: true },
    userId: { type: ObjectId, required: false },
    Image: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Recipe = model<IRecipe>('Recipe', recipeSchema);

export default Recipe;

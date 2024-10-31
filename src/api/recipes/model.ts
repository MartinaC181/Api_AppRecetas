import { Schema, Model, model } from "mongoose";

const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    steps: {
        type: [String],
        required: false,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    Image: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Recipe = model("Recipe", RecipeSchema);

export default Recipe;

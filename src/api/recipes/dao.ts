import { IRecipe } from "./type";
import Recipe from "./model";

class RecipeDao {
    async getRecipeByTitle(title: string) {
        try {
            const recipe = await Recipe.findOne({ title });
            return recipe;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async getRecipeById(recipeId: string) {
        try {
            const recipe = await Recipe.findById(recipeId);
            return recipe;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async getAllRecipes() {
        try {
            const recipes = await Recipe.find();
            return recipes;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async createRecipe(recipe: IRecipe) {
        try {
            const newRecipe = await Recipe.create(recipe);
            return newRecipe;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async editRecipe(recipeId: string, recipe: IRecipe) {
        try {
            const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, recipe, { new: true });
            return updatedRecipe;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async deleteRecipe(recipeId: string) {
        try {
            const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);
            return deletedRecipe;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const recipeDao = new RecipeDao();
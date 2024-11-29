import { IRecipe } from "./type";
import { recipeDao } from "./dao";

const { getRecipeByTitle, getAllRecipes, getRecipeById, createRecipe, editRecipe, deleteRecipe } = recipeDao;

class RecipeService {
    async getRecipeByTitle(title: string) {
        try {
          const recipe = await getRecipeByTitle(title);
            return recipe;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async getRecipe(id: string) {
        try {
          const recipe = await getRecipeById(id);
            return recipe;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async getRecipes() {
        try {
          const recipes = await getAllRecipes();
            return recipes;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async createRecipe(recipe: IRecipe) {
        try {
          const newRecipe = await createRecipe(recipe);
            return newRecipe;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async editRecipe(id: string, recipe: IRecipe) {
        try {
          const editedRecipe = await editRecipe(id, recipe);
            return editedRecipe;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async deleteRecipe(id: string) {
        try {
          const deletedRecipe = await deleteRecipe(id);
            return deletedRecipe;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const recipeService = new RecipeService();
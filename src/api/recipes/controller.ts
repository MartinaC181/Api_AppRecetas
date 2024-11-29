import { Request, Response } from 'express';
import { recipeService } from './service';
import { IRecipe } from './type';

const { createRecipe, getRecipes, getRecipe, editRecipe, deleteRecipe } = recipeService;

class RecipeController {
    async createRecipe(req: Request, res: Response) {
        const { title, description, ingredients, steps, Image} = req.body;
        try {
        const recipe: IRecipe = {
            title, description, ingredients, steps, Image
        };
        const newRecipe = await createRecipe(recipe);
        res.status(201).json(newRecipe);
        } catch (error: any) {
        res.status(400).json({ message: error.message });
        } 
    }
    
    async getRecipes(req: Request, res: Response) {
        try {
        const recipes = await getRecipes();
        res.status(200).json(recipes);
        } catch (error: any) {
        res.status(400).json({ message: error.message });
        }
    }
    
    async getRecipe(req: Request, res: Response) {
        const id = req.params.id
        try {
        const recipe = await getRecipe(id);
        res.status(200).json(recipe);
        } catch (error:any) {
        res.status(400).json({ message: error.message });
        }
    }
    
    async editRecipe(req: Request, res: Response) {
        const id = req.params.id
        const recipe: IRecipe = req.body
        console.log(recipe)
        try {
        const updatedRecipe = await editRecipe(id, recipe);
        res.status(200).json(updatedRecipe);
        } catch (error:any) {
        res.status(400).json({ message: error.message });
        }
    }
    
    async deleteRecipe(req: Request, res: Response) {
        try {
        await deleteRecipe(req.params.id);
        res.status(200).json({ message: 'Recipe deleted successfully' });
        } catch (error:any) {
        res.status(400).json({ message: error.message });
        }
    }
}

export const recipeController = new RecipeController();
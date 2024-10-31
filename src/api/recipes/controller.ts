import { Request, Response } from 'express';
import { recipeService } from './service';
import Recipe from './model';

const { createRecipe, getRecipes, getRecipe, editRecipe, deleteRecipe } = recipeService;

class userController {
    async createRecipe(req: Request, res: Response) {
        try {
        const recipe = req.body;
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
        try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params)
        res.status(200).json(updatedRecipe);
        } catch (error:any) {
        res.status(400).json({ message: error.message });
        }
    }
    
    async deleteRecipe(req: Request, res: Response) {
        try {
        await Recipe.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Recipe deleted successfully' });
        } catch (error:any) {
        res.status(400).json({ message: error.message });
        }
    }
}
import { ObjectId } from "mongodb";

export interface IRecipe {
    title: string;
    description: string;
    ingredients: string[];
    steps: string[];
    Image: string;
    createdAt?: string;
    userId?: ObjectId;
}


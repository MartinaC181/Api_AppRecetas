import { ObjectId } from "mongodb";

export interface IRecipe {
    title: string;
    description: string;
    ingredients: string[];
    steps: string[];
    image: string;
    createdAt: string;
    userId: ObjectId;
}

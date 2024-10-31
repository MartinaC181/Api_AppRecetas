
export interface IRecipe {
    id: string;
    name: string;
    ingredients: Ingredient;
    ingredientLines: string[];
    cantIngr: string;
    url: string;
    diet: string[];
    health: string[];
    cuisineType: cuisineType;
    mealType: mealType;
    dishType: dishType;
    calories: string;
    image?: imageInfo;
    createdAt?: Date;
}

type cuisineType = 'American' | 'Asian' | 'British' | 'Caribbean' | 'Central Europe' | 'Chinese' | 'Eastern Europe' | 'French' | 'Indian' | 'Italian' | 'Japanese' | 'Kosher' | 'Mediterranean' | 'Mexican' | 'Middle Eastern' | 'Nordic' | 'South American' | 'South East Asian';
type mealType = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack' | 'Teatime';
type dishType = 'Biscuits and cookies' | 'Bread' | 'Cereals' | 'Condiments and sauces' | 'Desserts' | 'Drinks' | 'Main course' | 'Pancake' | 'Preps' | 'Preserve' | 'Salad' | 'Sandwichs' | 'Side dish' | 'Soup' | 'Starter' | 'Sweets';

interface imageInfo {
    url: string
    width: number
    height: number
}

export interface RootObject {
    q: string;
    from?: number;
    to: number;
    more?: boolean;
    count?: number;
    hits?: Hit[];
}

export interface Hit {
    recipe: Recipe;
}

export interface Recipe {
    uri?: string;
    label: string;
    image: string;
    source?: string;
    url?: string;
    shareAs?: string;
    yield?: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions?: any[];
    ingredientLines: string[];
    ingredients: Ingredient[];
    calories: number;
    totalWeight ?: number;
    totalTime?: number;
    cuisineType?: string[];
    mealType?: string[];
    dishType?: string[];
  }

  export interface Ingredient {
    text: string;
    quantity: number;
    measure: null | string | string;
    food: string;
    weight: number;
    foodCategory: string;
    foodId: string;
    image: string;
}


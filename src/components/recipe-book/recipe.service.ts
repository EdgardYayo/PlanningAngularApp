import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../../app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Beans", 
            "Nice Beans with Chili", 
            "https://www.allrecipes.com/thmb/zDM9hAhVnD50qod0WhD7dZcuk_s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23336_FantasticBlackBeanChili_ddmfs_4x3_2150-9a545d26112c49aba786c38ef1d027d8.jpg",
            [
                new Ingredient('Beans cans', 2),
                new Ingredient('Chili cans', 3),
                new Ingredient('Tbsp of salt', 1)

            ]
            )
    ];

    constructor(private shoppingService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingService.addIngredients(ingredients);
    }

}
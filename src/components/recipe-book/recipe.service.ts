import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../../app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping.service";

@Injectable()
export class RecipeService {
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
            ),
        new Recipe(
            "Piña Colada",
            "Nice, refreshing and creamy piña colada",
            "https://lomaculinaria.com/wp-content/uploads/2022/07/Pin%CC%83a-Colada-Loma-Culinaria-1200x800-1.jpg",
            [
                new Ingredient('Piña slices cans', 2),
                new Ingredient('Coconut milk can', 2),
                new Ingredient('Honey tbsp', 3),
                new Ingredient('Cherry', 1)
            ]
        )
    ];

    constructor(private shoppingService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingService.addIngredients(ingredients);
    }

}
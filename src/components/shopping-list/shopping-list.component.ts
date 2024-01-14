import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../../app/shared/ingredient.model";
import { ShoppingListService } from "./shopping.service";

@Component({
    selector: 'app-shopping-list',
    templateUrl:'./shopping-list.component.html',
    styleUrl:'./shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];

    constructor(private shoppingService: ShoppingListService) { }

    ngOnInit() { 
        this.ingredients = this.shoppingService.getIngredients();
        this.shoppingService.ingredientsChanged
            .subscribe(
                (ingredients: Ingredient[]) => {
                    this.ingredients = ingredients;
                }
            )
    }
}
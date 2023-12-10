import { Component } from "@angular/core";
import { Ingredient } from "../../app/shared/ingredient.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl:'./shopping-list.component.html',
    styleUrl:'./shopping-list.component.css'
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient("Beans cans", 2),
        new Ingredient("Chili cans", 3)
    ];

    constructor() { }

    ngOnInit() { }

}
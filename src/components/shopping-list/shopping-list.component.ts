import { Component, OnDestroy, OnInit } from "@angular/core";
import { Ingredient } from "../../app/shared/ingredient.model";
import { ShoppingListService } from "./shopping.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-shopping-list',
    templateUrl:'./shopping-list.component.html',
    styleUrl:'./shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    private igChangeSub: Subscription;

    constructor(private shoppingService: ShoppingListService) { }

    ngOnInit() { 
        this.ingredients = this.shoppingService.getIngredients();
        this.igChangeSub = this.shoppingService.ingredientsChanged
            .subscribe(
                (ingredients: Ingredient[]) => {
                    this.ingredients = ingredients;
                }
            )
    }

    ngOnDestroy(): void {
        this.igChangeSub.unsubscribe();
    }

    onEditItem(index: number) {
        this.shoppingService.startedEditing.next(index);
    }
}
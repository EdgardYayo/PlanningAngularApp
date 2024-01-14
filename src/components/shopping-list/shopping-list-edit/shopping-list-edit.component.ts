import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Ingredient } from "../../../app/shared/ingredient.model";
import { ShoppingListService } from "../shopping.service";

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl:'./shopping-list-edit.component.html',
    styleUrl:'./shopping-list-edit.component.css'
})
export class ShoppingListEditComponent implements OnInit {

    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

    constructor(private shoppingService: ShoppingListService) {}

    ngOnInit(): void {
    }

    onAddItem(){
        const newIngredient = new Ingredient(
            this.nameInputRef.nativeElement.value,
            this.amountInputRef.nativeElement.value
        )
        this.shoppingService.addIngredient(newIngredient);
    }
}
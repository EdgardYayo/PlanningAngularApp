import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "../../../app/shared/ingredient.model";

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl:'./shopping-list-edit.component.html',
    styleUrl:'./shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {

    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;
    @Output() ingredientsAdded = new EventEmitter<Ingredient>();

    onAddItem(){
        const newIngredient = new Ingredient(
            this.nameInputRef.nativeElement.value,
            this.amountInputRef.nativeElement.value
        )

        this.ingredientsAdded.emit(newIngredient);
    }
}
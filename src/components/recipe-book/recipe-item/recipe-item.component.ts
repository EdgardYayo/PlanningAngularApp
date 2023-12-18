import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-item',
    templateUrl:'./recipe-item.component.html',
    styleUrl:'./recipe-item.component.css'
})
export class RecipesItemComponent {
    @Input() rec: Recipe;
    @Output() selectRecipe = new EventEmitter<void>();

    onRecipeClicked(){
        this.selectRecipe.emit();
    }
}
import { Component, Input, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector: 'app-recipe-item',
    templateUrl:'./recipe-item.component.html',
    styleUrl:'./recipe-item.component.css'
})
export class RecipesItemComponent implements OnInit {
    @Input() rec: Recipe;

    constructor(private recipeService: RecipeService) {}

    ngOnInit(): void {
    }

    onRecipeClicked(){
        this.recipeService.recipeSelected.emit(this.rec);
    }
}
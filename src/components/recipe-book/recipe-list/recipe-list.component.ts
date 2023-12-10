import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl:'./recipe-list.component.html',
    styleUrl:'./recipe-list.component.css'
})
export class RecipesListComponent {
    recipes: Recipe[] = [
        new Recipe("Beans", "Nice Beans with Chili", "https://www.allrecipes.com/thmb/zDM9hAhVnD50qod0WhD7dZcuk_s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23336_FantasticBlackBeanChili_ddmfs_4x3_2150-9a545d26112c49aba786c38ef1d027d8.jpg")
    ];

    constructor() { }

    ngOnInit() {}
}
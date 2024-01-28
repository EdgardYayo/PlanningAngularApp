import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "../components/recipe-book/recipes/recipes.component";
import { ShoppingListComponent } from "../components/shopping-list/shopping-list.component";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipesDetailComponent } from "../components/recipe-book/recipe-detail/recipe-detail.component";
import { RecipesEditComponent } from "./recipes-edit/recipes-edit.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipesStartComponent },
        { path: 'new', component: RecipesEditComponent },
        { path: ':id', component: RecipesDetailComponent },
        { path: ':id/edit', component: RecipesEditComponent }
    ] },
    { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
 exports: [RouterModule]   
})
export class AppRoutingModule {

}
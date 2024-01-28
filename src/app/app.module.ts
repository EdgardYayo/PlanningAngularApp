import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { RecipesComponent } from '../components/recipe-book/recipes/recipes.component';
import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from '../components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipesListComponent } from '../components/recipe-book/recipe-list/recipe-list.component';
import { RecipesItemComponent } from '../components/recipe-book/recipe-item/recipe-item.component';
import { RecipesDetailComponent } from '../components/recipe-book/recipe-detail/recipe-detail.component';
import { FormsModule } from '@angular/forms';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from '../components/shopping-list/shopping.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropDownDirective,
    RecipesStartComponent,
    RecipesEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../../components/recipe-book/recipe.service';
import { Recipe } from '../../components/recipe-book/recipe.model';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrl: './recipes-edit.component.css'
})
export class RecipesEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['description'],
      this.recipeForm.value['ingredients']
    );

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }

    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount' : new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  private initForm() {
    let recipeName = "";
    let recipeImage = "";
    let recipeDescription = "";
    let recipeIngredients = new FormArray([]);

    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImage = recipe.imagePath;
      recipeDescription = recipe.description;

      if(recipe.ingredients) {
        for(let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }

    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImage, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

}

import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1',
      'Description of this recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Salad', 2),
      ]),
    new Recipe(
      'A test recipe 2',
      'Description of this recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505', []),
    new Recipe('A test recipe 3', 'Description of this recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Cheese', 2),
      ])
  ];

  constructor(private shoppingService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  sendIngredientsToShopping(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}

import { EventEmitter, Injectable } from '@angular/core';


import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
 private recipes: Recipe[] = [
    new Recipe(
      'Puttanesca',
      'Spaghetti alla puttanesca is an Italian pasta dish invented in Naples in the mid-20th century and made typically with tomatoes, olive oil, olives, anchovies, chili peppers, capers, and garlic—with vermicelli or spaghetti pasta.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&webp=true&resize=600,545',
      [new Ingredient("olive oil", 1), new Ingredient("garlic", 5),new Ingredient("tomatoes", 4),new Ingredient("capers", 3), new Ingredient("long pasta", 58)]
    ),
    new Recipe(
      'Caesar Salad',
      'Classic Caesar Salad',
      'https://www.recipetineats.com/wp-content/uploads/2016/05/Caesar-Salad_7-SQ.jpg',
      [new Ingredient("chicken", 1), new Ingredient("green salad", 2),new Ingredient("parmesan", 2) ]
    ),
  ];
  constructor(private shoppingListService: ShoppingListService) { }
  getRecipes(){
    return this.recipes.slice();
  }
  addEngredientsToShoppingList(ingredientsArr: Ingredient[]){
this.shoppingListService.addIngredients(ingredientsArr);
  }
}

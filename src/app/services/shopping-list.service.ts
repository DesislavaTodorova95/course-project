import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()
 private ingredients: Ingredient[]= [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 8)];
  constructor() { }
  
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredients(ingredients: Ingredient[]){
     this.ingredients.push(...ingredients);
     this.ingredientsChanged.emit(this.ingredients.slice())
  }
}

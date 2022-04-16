import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipe = Recipe;
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&webp=true&resize=600,545'
    ),
    new Recipe(
      'Caesar Salad',
      'Classic Caesar Salad',
      'https://www.recipetineats.com/wp-content/uploads/2016/05/Caesar-Salad_7-SQ.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe) {
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }
}

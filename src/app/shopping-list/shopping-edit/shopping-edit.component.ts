import { Component, OnInit} from '@angular/core';

import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddIngredient(ingredient: Ingredient){
    
const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
this.shoppingListService.addIngredient(newIngredient);
  }
}

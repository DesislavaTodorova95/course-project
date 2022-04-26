import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingredientForAdd: Ingredient; 
  private igChangSub: Subscription;
  constructor(private shoppingListServices: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListServices.getIngredients();
   this.igChangSub= this.shoppingListServices.ingredientsChanged.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;
      }
    )
  }
  ngOnDestroy(){
this.igChangSub.unsubscribe();
  }
  onEditItem(index: number){
    this.shoppingListServices.startedEditing.next(index)
  }
 
}

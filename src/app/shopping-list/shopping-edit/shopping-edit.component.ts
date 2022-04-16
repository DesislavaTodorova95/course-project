import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@Output() addNewIngredient= new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddIngredient(ingredient: Ingredient){
    
const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
this.addNewIngredient.emit(newIngredient);
  }
}

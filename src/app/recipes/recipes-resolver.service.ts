import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { RecipeService } from "../services/recipe.service";

import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{
constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService){

}
resolve(route: ActivatedRouteSnapshot, status: RouterStateSnapshot){
    const recipes = this.recipeService.getRecipes();
    if(recipes.length=== 0){
        return this.dataStorageService.fetchRecipes(); 
    }else {return recipes}
 
}
    

}
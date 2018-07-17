import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService{
    
    recipeSelected = new EventEmitter<Recipe>();

    private recipes:Recipe[] = [
        new Recipe('A test recipe','this is a simply test','https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29.jpg'),
        new Recipe('A test recipe2','this is a simply test2','https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29.jpg')
      ];

      getRecipes(){
          return this.recipes.slice();
      }


}
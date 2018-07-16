import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('A test recipe','this is a simply test','https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29.jpg'),
    new Recipe('A test recipe2','this is a simply test2','https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}

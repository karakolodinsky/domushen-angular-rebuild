import { Component } from '@angular/core';
import { Recipe } from './recipes';
import { RECIPES } from '../recipes';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipe = RECIPES

  selectedrec?: Recipe;

  isMenuVisible: boolean = true;
  isRecipeVisible: boolean = false;

  onSelect(recipe: Recipe): void {
    this.selectedrec = recipe;
    this.isRecipeVisible = true;
    this.isMenuVisible = false;
  }
}
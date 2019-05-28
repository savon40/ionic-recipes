import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {


  private recipes: Recipe[] = [
    {
      id: 'r1', 
      title: 'Schnitzel',
      imageUrl: 'https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile_2x.jpg',
      ingredients: ['French Fries', ' Pork']
    },
    {
      id: 'r2', 
      title: 'Burger',
      imageUrl: 'https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile_2x.jpg',
      ingredients: ['Bun', ' Meat', 'Ketchup']
    }
  ];

  constructor() { }

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
}

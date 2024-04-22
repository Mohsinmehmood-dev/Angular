import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-recipe-list',
    standalone: true,
    templateUrl: './recipe-list.component.html',
    styleUrl: './recipe-list.component.css',
    imports: [RecipeItemComponent,CommonModule]
})
export class RecipeListComponent  implements OnInit{

 recipes: Recipe[] = [ 
    new Recipe (
        "test recipe",
        "this is a test recipe",
     "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272"
    )];

    ngOnInit(): void {
    }

}

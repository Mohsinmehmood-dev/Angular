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
    ),
    new Recipe (
        "test recipe",
        "this is a test recipe",
        "https://plus.unsplash.com/premium_photo-1670895801174-8278045808f4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    ),
    new Recipe (
        "test recipe",
        "this is a test recipe",
"https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    ),];

    ngOnInit(): void {
    }

}

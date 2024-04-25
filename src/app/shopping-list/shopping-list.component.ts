import { Component } from '@angular/core';
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { Ingredient } from '../shared/ingredient.model';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-shopping-list',
    standalone: true,
    templateUrl: './shopping-list.component.html',
    styleUrl: './shopping-list.component.css',
    imports: [ShoppingEditComponent , CommonModule]
})
export class ShoppingListComponent {
  ingredients : Ingredient [] =[
    new Ingredient("apple",10),
    new Ingredient("mango",15),
    new Ingredient("banana",3),
    new Ingredient("strawberry",13),
    new Ingredient("grape",7),
  ]
}

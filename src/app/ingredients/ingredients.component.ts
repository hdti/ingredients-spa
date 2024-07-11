import { Component } from '@angular/core';
import { IngredientsService } from '../ingredients.service';
import { Ingredient } from '../model/ingredient';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent {

  ingredients$?: Observable<Ingredient[]>;

  constructor(private ingredientService: IngredientsService){}
  
  ngOnInit(): void {
    this.getAllIngredients();
  }

  getAllIngredients(): void {
    this.ingredients$ = this.ingredientService.getAllIngredients();
  }

}

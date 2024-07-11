import { Component } from '@angular/core';
import { Ingredient } from '../model/ingredient';
import { Observable } from 'rxjs';
import { IngredientsService } from '../ingredients.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrl: './ingredient-details.component.scss'
})
export class IngredientDetailsComponent {

  ingredient$?: Observable<Ingredient>;

  constructor(private ingredientService: IngredientsService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void {
    this.getIngredientById();
  }

  getIngredientById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ingredient$ = this.ingredientService.getIngredientById(id)
  }

  goBack(): void {
    this.location.back();
  }

}

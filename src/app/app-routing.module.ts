import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';

const routes: Routes = [
  { path: 'home', component: IngredientsComponent},
  { path: 'ingredients', component: IngredientsComponent},
  { path: 'ingredients/:id', component: IngredientDetailsComponent},
  { path: '', component: IngredientsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

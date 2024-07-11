import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IngredientsComponent,
    IngredientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

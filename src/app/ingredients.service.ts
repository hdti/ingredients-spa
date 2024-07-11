import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.dev';
import { Ingredient } from './model/ingredient';
import { Observable, shareReplay } from 'rxjs';


const BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private http: HttpClient) { }


  getAllIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(BASE_URL)
      .pipe(shareReplay());
  }

  getIngredientById(id: number): Observable<Ingredient>{
    return this.http.get<Ingredient>(`${BASE_URL}/${id}`)
      .pipe(shareReplay());
  }


}

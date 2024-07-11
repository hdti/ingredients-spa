import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.dev';
import { Ingredient } from './model/ingredient';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private http: HttpClient) { }

  private baseUrl:string = environment.baseUrl;

  getAllIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.baseUrl)
      .pipe(shareReplay());
  }


}

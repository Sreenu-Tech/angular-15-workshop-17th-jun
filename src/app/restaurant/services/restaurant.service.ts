import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMenuCategory } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private _http: HttpClient) { }

  details(resId: string) {
    return this._http.get<IMenuCategory[]>('http://localhost:3005/items')
  }
}

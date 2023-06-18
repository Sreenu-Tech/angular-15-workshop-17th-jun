import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IRestaurant } from '../models/restaurant.model';
import { ILocation } from 'src/app/location/models/location.model';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  @Input() selectedLocation!: ILocation
  // store the Restaurants
  restaurants: IRestaurant[] = [];

  constructor(private _http: HttpClient) {

  }
  ngOnInit(): void {
    this.loadRestaurants();
  }

  private loadRestaurants() {
    this._http.get<IRestaurant[]>('http://localhost:3005/restaurants').subscribe(results => {
      // assign the results into restaurants
      this.restaurants = results;
      console.log(results);
    })
  }
}

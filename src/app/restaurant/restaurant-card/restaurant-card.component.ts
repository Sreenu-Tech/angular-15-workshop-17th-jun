import { Component, Input } from '@angular/core';
import { IRestaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent {
  // define a input which store Restaurant info
  @Input() item!: IRestaurant;
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMenuItem } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  /**
   * Subject : This is part of RXJS
   * Observable :  Looking for some changes
   * SUbject is type of IMenuItem, which will store IMenuItem type
   * Publish
   * Subsrcibe
   */
  onItemAdd = new Subject<IMenuItem>();

  constructor() { }
}

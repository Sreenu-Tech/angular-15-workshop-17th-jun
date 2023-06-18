import { Component, OnInit } from '@angular/core';
import { IMenuItem } from 'src/app/restaurant/models/restaurant.model';
import { CartService } from 'src/app/restaurant/services/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  // multiple items
  cartItems: IMenuItem[] = [];

  constructor(private _service: CartService) {

  }

  ngOnInit(): void {
    // subscribe
    this._service.onItemAdd.subscribe(item => {
      this.prepareCartItems(item)
    })
  }

  private prepareCartItems(item: IMenuItem) {
    // fist get the item from array
    // findInde : which is used to get the item index by predicate
    const index = this.cartItems.findIndex(m => m.id == item.id);
    if (index > -1) {
      if (item.qty > 0) {
        // item already exist in array
        this.cartItems[index].qty = item.qty;
      }
      else {
        // delete the item
        //splice : delete an item from an array
        this.cartItems.splice(index, 1)
      }

    }
    else {
      // new item
      // add incoming item to array object
      this.cartItems.push(item)
    }
  }

}

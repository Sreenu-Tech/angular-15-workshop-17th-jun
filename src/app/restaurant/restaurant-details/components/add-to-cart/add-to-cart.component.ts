import { Component, Input, OnInit } from '@angular/core';
import { IMenuItem } from 'src/app/restaurant/models/restaurant.model';
import { CartService } from 'src/app/restaurant/services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {


  @Input() item!: IMenuItem

  constructor(private _service:CartService){

  }

  ngOnInit(): void {
    console.log(this.item.qty)
    /**
     * 0: false
     * false : false
     * '' : false
     * undefine :false
     * null : false
     */
  }

  handleAdd() {
    // autometically create a prop called qty with value 1
    this.item.qty = 1;
    this._service.onItemAdd.next(this.item)
  }

  handlePlus() {
    // ++ : x=x+1
    // increate the value by one
    this.item.qty++;
    // publish the cart
    // next is used to pusblish the data to the subscriber
    this._service.onItemAdd.next(this.item)
  }

  handleMinus() {
    // -- : x=x-1
    // decrease the value by one
    this.item.qty--;
    //
    this._service.onItemAdd.next(this.item)
  }

}

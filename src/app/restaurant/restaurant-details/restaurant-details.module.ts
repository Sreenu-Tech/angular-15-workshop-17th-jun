import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantDetailsRoutingModule } from './restaurant-details-routing.module';
import { DetailsViewComponent } from './components/details-view/details-view.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';

/**
 * @NgModule : is used to create module
 * declarations: here we will add the component which are belongs to this module
 * imports : Use another modules in side this module
 */
@NgModule({
  declarations: [
    DetailsViewComponent,
    MenuItemComponent,
    AddToCartComponent,
    CartViewComponent
  ],
  imports: [
    CommonModule,
    RestaurantDetailsRoutingModule
  ],
})
export class RestaurantDetailsModule { }

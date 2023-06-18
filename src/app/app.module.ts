import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationSelectionComponent } from './location/location-selection/location-selection.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationSearchItemComponent } from './location/location-search-item/location-search-item.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { RestaurantCardComponent } from './restaurant/restaurant-card/restaurant-card.component'

@NgModule({
  declarations: [
    AppComponent,
    LocationSelectionComponent,
    LocationSearchItemComponent,
    RestaurantListComponent,
    RestaurantCardComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule : helps us to use ngModel in component
    FormsModule,
    // HttpClientModule: help us to enbale http call in application
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

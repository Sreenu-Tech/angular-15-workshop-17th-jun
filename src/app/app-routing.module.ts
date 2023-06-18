import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationSelectionComponent } from './location/location-selection/location-selection.component';

const routes: Routes = [
  {
    // routing path of the application
    // '' is stands for root path
    path: '',
    // component: connect the view/ui with above path
    component: LocationSelectionComponent
  },
  {
    path: 'restaurants',
    // loadChildren : is enbale lazy loading in app
    loadChildren: () => import('./restaurant/restaurant-details/restaurant-details.module').then(m => m.RestaurantDetailsModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  }
];

/**
 * Root routing
 * means all the routing will start from here
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsViewComponent } from './components/details-view/details-view.component';

// http://localhost:4200/restaurants/
const routes: Routes = [
  {
    /**
     * : define dynamic path param
     * :resId : when we pass any dynamic value on router path, this 'resId' hold that value
     * http://localhost:4200/restaurants/1234
     */
    path: ':resId',
    component: DetailsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantDetailsRoutingModule { }

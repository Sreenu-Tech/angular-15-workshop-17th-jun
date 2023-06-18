import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenuCategory } from 'src/app/restaurant/models/restaurant.model';
import { RestaurantService } from 'src/app/restaurant/services/restaurant.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {

  // store the res id
  resId!: string

  menuCategories: IMenuCategory[] = [];

  /**
   * ActivatedRoute : is used to access the current routing information
   */
  constructor(private _service: RestaurantService, private _ar: ActivatedRoute) {

  }

  ngOnInit(): void {
    // 
    /**
     * get the resId from path param
     * snapshot: get the current routing info
     * paramMap : this will access path param info
     * get :access the specific key from the pramamap
     * ! : ignore null check
     */
    this.resId = this._ar.snapshot.paramMap.get('resId')!;
    console.log(this.resId)
    // load details
    this.loadDetails();
  }

  private loadDetails() {
    this._service.details(this.resId).subscribe(results => {
      this.menuCategories = results
      console.log(this.menuCategories)
    })
  }


}

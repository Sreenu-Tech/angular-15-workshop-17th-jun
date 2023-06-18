import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILocation } from '../models/location.model';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-location-search-item',
  templateUrl: './location-search-item.component.html',
  styleUrls: ['./location-search-item.component.css']
})
export class LocationSearchItemComponent {
  /**
   * If we want to access some data/value from parent component to
   * child component, we need a special decorator is called @Input
   * ! : mark as optional
   */
  @Input() locationItem!: ILocation;
  /**
   * @Output : is used to pass the data from child to parent
   * EventEmitter : is used to send/emiti/broadcast the event the parent
   */
  @Output() onSelect = new EventEmitter()

  constructor(private _service: LocationService) {

  }

  handleSelect() {
    // store the location item
    this._service.onLocationSelect(this.locationItem)
    // fire event
    // emit is used to fire/send the event
    this.onSelect.emit();
  }

}
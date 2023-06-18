import { Component, Input } from '@angular/core';
import { IMenuItem } from 'src/app/restaurant/models/restaurant.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() item!:IMenuItem
}

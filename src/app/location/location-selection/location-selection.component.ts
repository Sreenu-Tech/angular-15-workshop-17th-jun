import { Component, OnInit } from '@angular/core';
import { ILocation } from '../models/location.model';
import { LocationService } from '../services/location.service';

// decorator
// meta data : data about data
@Component({
  // define custom tag name for the application
  selector: 'app-location-selection',
  // templateUrl : specify the path of the html file
  // ./ means top parent path
  // : assign the value to the key/property
  templateUrl: './location-selection.component.html',
  // styleUrls : spcify the style files for this component
  // [] : array
  styleUrls: ['./location-selection.component.css']
})
/**
 * implements : implement an interface in a class
 * OnInit : interface invoke ngOnInit method
 */
export class LocationSelectionComponent implements OnInit {

  // store the selected location
  selectedLocation!: ILocation

  /**
   * constructor : define constructor of a class
   * HttpClient : class is used to do http calls (GET,POST,PUT)
   * DI : Depedancy Injection
   */
  constructor(private _service: LocationService) {

  }
  /**
   * Lifecycle
   * this will fire/call when component load
   * here we will do some startup work
   * This will call only once in component lifecycle
   */
  ngOnInit(): void {
    this.prepareStoredLocattion();
  }

  private prepareStoredLocattion() {
    const location = this._service.getSelectedLocation();
    if (location) {
      this.selectedLocation = location;
      console.log(this.selectedLocation)
    }
  }

  /**
   * JAVA/C#
   * string locationName='';
   * dataType varibaleName=value;
   * TS:
   *  locationName:string=''
   *  variablename:dataType=value
   * member varibale
   */
  locationName: string = ''
  // [] : array
  // In JS, by default array is dynamic data str.
  // this will store all the location from API
  locations: ILocation[] = [];

  /**
   * method
   * public int add(int x,int y){}
   * Access Modifer (private,public,protected)
   * return type (typevoid)
   * methodName
   * params
   * 
   * TS : by default method is public
   *    : by default return type is void, unit you return any value
   */

  handleSearch() {
    // console.log : is used  print the message in browser console window
    /**
     * same as Java: System.Println
     * same as C#  : Console.WriteLine
     * PHP : echo
     * this : is refere to current class object
     * get : is used to call the API end point in GET method
     * subscribe : is used wating for the result
     * when result available, the subscribe will execute the function
     * <> : generic, means you have to specify which type of data it will retrun
     */
    if (this.locationName) {
      this._service.searchLocation(this.locationName).subscribe(results => {
        this.locations = results;
      })
    }
  }

  handleSelection() {
    /**
     * clear the location object
     * call the local storage
     */
    this.locations = [];
    this.prepareStoredLocattion();
    // load the 
  }
}
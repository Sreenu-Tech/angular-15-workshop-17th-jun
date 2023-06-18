import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILocation } from '../models/location.model';

/**
 * @Injectable : is used to make a class as service
 * This is also enable DI for the service
 * providedIn : inject this service in root level, means this service will available in all the components
 * Service is singleton
 */
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private _http: HttpClient) { }

  searchLocation(locationCode: string) {
    return this._http.get<ILocation[]>('http://localhost:3005/location/search')
  }

  onLocationSelect(item: ILocation) {
    /**
    * we need to store the data in a place that , if user refresh the browser, we will get the data in our application
    * 
    * To store the data permanent in application, we have to use browser storage featues like
    * 1. Local Storage
    * 2. Session Storage
    * Info
    * 1. Store the data in key value format (Dictonary/MAP)
    * 2. Both key & value is string type
    * 3. The only difference between local & session is , session storage will remove the data when browser/tab closed
    * 4. to Access Local Storage, we have to use 'localStorage' object
    * 4. to Access Session Storage, we have to use 'sessionStorage' object
    * 
    * How To Use?
    *  localStorage.setItem : used to set& update the value
    *  To convert a object to string, we have to user `JSON.stringify`
    */
    localStorage.setItem("selected_location", JSON.stringify(item));
  }

  getSelectedLocation(): ILocation | null {
    // read the local storage
    // const is used to store the value, and the value can't change
    const storageLocation = localStorage.getItem('selected_location')
    // NULL check
    if (storageLocation) {
      // do the work
      // JSON.parse: convert the data to an object
      // any type is super type of all the type
      // as is used to convert the specific type
      return JSON.parse(storageLocation) as ILocation
    }
    return null
  }
}

import { Injectable } from '@angular/core';
import { HttpClient }  from "@angular/common/http"
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getSum(arr:any){
    return arr.reduce((a:any,b:any)=>{
      return a+b
    })
  }
  getData(){
    return this.http.get("https://puppygifs.tumblr.com/api/read/json#_=_")
  }

  getLocation(){
   return new Observable((observer) => {
      let watchId: number;
    
      // Simple geolocation API check provides values to publish
      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition((position: Position) => {
          observer.next(position);
        }, (error: PositionError) => {
          observer.error(error);
        });
      } else {
        observer.error('Geolocation not available');
      }
    
      // When the consumer unsubscribes, clean up data ready for next subscription.
      return {
        unsubscribe() {
          navigator.geolocation.clearWatch(watchId);
        }
      };
    });
}

}

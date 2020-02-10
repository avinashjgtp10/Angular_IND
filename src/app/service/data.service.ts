import { Injectable } from '@angular/core';
import { HttpClient }  from "@angular/common/http"
import { from } from 'rxjs';

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

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getSum(arr:any){
    return arr.reduce((a:any,b:any)=>{
      return a+b
    })
  }

}

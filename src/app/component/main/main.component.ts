import { Component, OnInit } from '@angular/core';
import { DataService } from "../../service/data.service"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  color="orange"
  public arr=[2,3,4,5,6,7,8]
  myAdd:any
  oneWay="Hello i am one way"
  name:any=""
  constructor(private data:DataService ) {
  
   }

  ngOnInit() {
    this.myAdd=this.data.getSum(this.arr)
  }
  changevale(e:any){
    this.name=e.target.value
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  color="orange"
  public arr=[2,3,4,5,6,7,8]
  oneWay="Hello i am one way"
  name:any=""
  constructor() { }

  ngOnInit() {
  }
  changevale(e:any){
    this.name=e.target.value
  }

}

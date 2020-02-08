import { Component, OnInit } from '@angular/core';
import { DataService } from "../../service/data.service"

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  mySum:any
 arr=[100,300,4765,87]
  constructor(private data:DataService) { }

  ngOnInit() {
    this.mySum=this.data.getSum(this.arr);
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from "../../service/data.service"
import { from } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messageFromChild="i am previous value"
  constructor(private service:DataService) { 
    console.log("hello i am constructor",service.getData())
    service.getData().subscribe((data)=>{
      console.log(data)
    })
  }
  // ngOnChanges(){
  //   console.log("ng changes")
  // }
  ngOnInit() {
      console.log("ng on Init")
  }
  // ngDoCheck(){
  //   console.log("ng do check")
  // }
  // ngAfterContentInit(){
  //   console.log("ngAfterContentInit()")
  // }
  // ngAfterViewInit(){
  //   console.log("ngAfterViewInit()")
  // }
  // ngAfterViewChecked(){
  //   console.log("ngAfterViewChecked()")
  // }
  // ngOnDestroy(){
  //   console.log("ngOnDestroy  ")
  // }

  myData(e:any){
    this.messageFromChild=e
  }
}

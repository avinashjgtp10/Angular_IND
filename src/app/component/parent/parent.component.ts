import { Component,ContentChild, OnInit,ViewChild,ViewChildren,QueryList, AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { DataService } from "../../service/data.service"
import { from } from 'rxjs';
import { MessageComponent } from "../message/message.component"

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {

  messageFromChild="i am previous value"

  @ViewChild(MessageComponent,{static:false}) viewChild:MessageComponent;
  @ViewChildren(MessageComponent) messageViewChildren:QueryList<MessageComponent>;
  @ContentChild(MessageComponent,{static:false}) messageContent:MessageComponent
  message:any

  constructor(private service:DataService,private cd:ChangeDetectorRef) { 
    service.getData().subscribe((data)=>{
      console.log(data)
    })
  }
  ngAfterViewInit(){
    // console.log(this.viewChild)
    // this.viewChild.message="hello message"
    // this.cd.detectChanges()
    console.log(this.messageViewChildren)
   // this.messageViewChildren.forEach((item)=>{item.message="hey this is my message"})
  }

  ngAfterContentInit(){
    console.log(this.messageViewChildren)
  }

  ngOnChanges(){

  }
  ngOnInit() {
    this.message = this.getMessage();
      // this.message ="hello this is message"
  }
  getMessage() {
    return [
        'Hello India',
        'Which team is winning Super Bowl? ',
        'Have you checked Ignite UI ?',
        'Take your broken heart and make it to the art'
    ];
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
  ngOnDestroy(){
    console.log("after distory")
  }

  myData(e:any){
    this.messageFromChild=e
  }
}

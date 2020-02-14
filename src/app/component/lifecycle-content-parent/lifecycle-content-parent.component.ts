import { Component, OnInit,ViewChild,ViewChildren, AfterViewInit,QueryList, ChangeDetectorRef } from '@angular/core';
import { MessageComponent } from '../message/message.component'

@Component({
  selector: 'app-lifecycle-content-parent',
  templateUrl: './lifecycle-content-parent.component.html',
  styleUrls: ['./lifecycle-content-parent.component.css']
})
export class LifecycleContentParentComponent implements OnInit,AfterViewInit {
 message:any;

 @ViewChild(MessageComponent,{static:false}) myViewChild:MessageComponent;
 @ViewChildren(MessageComponent) myViewChildren:QueryList<MessageComponent>;

  constructor(private cd:ChangeDetectorRef) { }
  

  ngOnInit() {
  this.message="Hello !"
  this.message=this.getMessage();
  }
  
  ngAfterViewInit(){
    // console.log(this.myViewChild)
    // console.log(this.myViewChildren)
    // this.myViewChildren.forEach((item)=>{
    //   item.message ="hello"
    // })
    // this.cd.detectChanges();
  }
  getMessage() {
    return [
        'Hello India',
        'Which team is winning Super Bowl? ',
        'Have you checked Ignite UI ?',
        'Take your broken heart and make it to the art'
    ];
}



}

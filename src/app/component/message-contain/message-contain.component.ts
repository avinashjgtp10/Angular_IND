import { Component, OnInit,ContentChild ,ContentChildren,QueryList, ChangeDetectorRef} from '@angular/core';
import { MessageComponent } from "../message/message.component"

@Component({
  selector: 'app-message-contain',
  templateUrl: './message-contain.component.html',
  styleUrls: ['./message-contain.component.css']
})
export class MessageContainComponent implements OnInit {

  greetMessage = 'Hello good Morning';
  @ContentChild(MessageComponent,{static:false}) myContentChild:MessageComponent;
  @ContentChildren(MessageComponent)mycontentChilder:QueryList<MessageComponent>

  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log(this.myContentChild)
    this.mycontentChilder.forEach((item,i)=>{
      if (i === 0){
        item.message="first value"
      }
      
    })
    this.cd.detectChanges();
  }
  ngOnDestroy(){
    console.log("after distory")
  }
  

}

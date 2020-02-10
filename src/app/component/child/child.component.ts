import { Component, OnInit, Input,Output,EventEmitter,OnChanges } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements  OnChanges {

  @Input() dataFromParent:string
  @Output() dataFromChild=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change){
    console.log(change.dataFromParent.previousValue,change.dataFromParent.currentValue)
  }
  ngDoCheck(value){
    console.log("calling do check",value)
  }

  passDate(e){
    this.dataFromChild.emit(e.target.value)
    console.log(e.target.value)
  }

}

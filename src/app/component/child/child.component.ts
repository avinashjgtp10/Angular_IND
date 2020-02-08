import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() dataFromParent:string
  @Output() dataFromChild=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  passDate(e){
    this.dataFromChild.emit(e.target.value)
    console.log(e.target.value)
  }

}

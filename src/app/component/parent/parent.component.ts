import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messageFromChild="Hello i am from parent"
  constructor() { }

  ngOnInit() {
  }

  myData(e){
    this.messageFromChild=e
  }
}

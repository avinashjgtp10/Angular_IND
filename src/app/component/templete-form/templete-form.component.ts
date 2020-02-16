import { Component, OnInit,NgModule,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-templete-form',
  templateUrl: './templete-form.component.html',
  styleUrls: ['./templete-form.component.css']
})
export class TempleteFormComponent implements OnInit {

@ViewChild("f",{static:false}) courseForm:NgForm

  constructor() { }

  ngOnInit() {
  }

  onSubmit(data:any){

    console.log(data.value.courseName)
    console.log(data.value.courseDesc)
    console.log(data.value.courseAmount)
  }

  onClear(){
    this.courseForm.resetForm()
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  arr:FormArray;
  formGroup:FormGroup;


  // formGroup=new FormGroup({
  //   firstName:new FormControl(),
  //   lastName:new FormControl(),
  //   address:new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });



  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      
      address: this.fb.group({
        street:  [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      arr:this.fb.array([
        this.createItem()
      ])
    });
  }

  createItem(){
    return this.fb.group({
      firstName: ['',Validators.required],
      lastName: [''],
    })
  }

  addItem(){
    this.arr=this.formGroup.get('arr') as FormArray
    this.arr.push(this.createItem())
  }

  remove(index){
    this.arr=this.formGroup.get('arr') as FormArray
    this.formGroup.removeControl(index) 
    console.log(index,)
  }



  onSubmit(){
    console.log(this.formGroup.value)
    console.log(this.formGroup)
  }

  updateForm(){
    this.formGroup.patchValue({
      firstName:"Avinash",
      address:{
        street:"Manjari"
      }
    })
  }

}

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
  validation_messages={
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password':[
      { type: 'required', message: 'password is required.' },
      {type:"minLength",message:"Minimum length should be 6"}
    ]
  }




  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: ['',Validators.compose([Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
      password: ['',Validators.compose([Validators.required,Validators.pattern[""],Validators.minLength(6) ])],
      address: this.fb.group({
        address:[],
        address2:[],
        street:  [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    })
      // arr:this.fb.array([
      //   this.createItem()
      // ])
   // });
  }

  createItem(){
    return this.fb.group({
      email: ['',Validators.required],
      password: [''],
      address: this.fb.group({
        address:[],
        address2:[],
        street:  [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    })
  }

  addItem(){
    this.arr=this.formGroup.get('arr') as FormArray
    this.arr.push(this.createItem())
  }

  remove(index){
     this.arr=this.formGroup.get('arr') as FormArray
        if(this.arr.length > 1){
          this.arr.removeAt(index)
        }
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

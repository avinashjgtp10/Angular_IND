import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


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


  formGroup = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases:this.fb.array([
      this.fb.control('')
    ])
  });


  constructor(private fb:FormBuilder) { }

  ngOnInit() {
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

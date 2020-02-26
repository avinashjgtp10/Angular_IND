import { Component, OnInit } from '@angular/core';
import { DataService } from "../../service/data.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:DataService) { }

  ngOnInit() {

    this.service.getData("admin@gmail.com","admin").subscribe((data:any)=>{
      console.log(data)
      if(data.status === "success"){
        alert("success")
      }
    })
  }

}

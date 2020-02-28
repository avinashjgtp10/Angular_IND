import { Component, OnInit } from '@angular/core';
import { DataService } from "../../service/data.service"
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  username:string;
  password:string;


  constructor(private service:DataService,
    private route: ActivatedRoute,
        private router: Router,) { 
          
          this.router.navigate(['/']);
          
        }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    
    // this.service.getData("admin@gmail.com","admin").subscribe((data:any)=>{
    //   console.log(data)
    //   if(data.status === "success"){
    //     alert("success")
    //   }
    // })
  }


  clickMe(){
    console.log(this.username,this.password)
    if(this.username === 'admin' && this.password ==="admin"){
      this.router.navigate([this.returnUrl+"main"]);
    }
  }

}

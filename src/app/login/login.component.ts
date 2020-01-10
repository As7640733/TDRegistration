import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Login } from '../classes/login';
import { api } from '../services/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private api: api) { }



  obj=new Login();
  login(loginForm:NgForm){
    console.log(this.obj.username+" -- "+this.obj.password);
   
    this.api.post("http://localhost:8000/tdregistration/login.php",JSON.stringify(this.obj))
    .subscribe(
      data=>{
        if(data==1){
          localStorage.setItem("username",this.obj.username);

          this.router.navigate(['/onboarding']);

        }else{
          alert("Wrong Credential"+data);
        }
      }
    );
  }
  ngOnInit() {
  }

}

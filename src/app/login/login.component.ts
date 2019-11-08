import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public webService: WebService, public router: Router) { 
  }

  ngOnInit() {
  }

  switchToRegister(){
    this.router.navigate(["/register"]);
  }

  login(email: String, password: String){
    if(email=="" || password==""){
      alert("Email/Password must not be empty");
      return;
    }

    this.webService.loginAPI({"email":email, "password":password}).subscribe(data =>{
      alert("login sucess");
    }, err =>{
      alert(err.error.message);
    }, ()=>{

    }); 


  }
}

import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public webService: WebService, public router: Router, public userService: UserService) { 
    if(this.userService.isUserLoggedIn == true){
      this.router.navigate(['/']);
    }
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
      //alert("login sucess");
      //alert("Welcome back!");
      this.userService.loginUser(data['data']['_id'], data['data']['email']);
      this.router.navigate(["/"]);
    }, err =>{
      alert(err.error.message);
    }, ()=>{

    }); 


  }
}

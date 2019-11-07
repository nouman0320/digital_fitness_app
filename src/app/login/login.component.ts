import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public webService: WebService) { }

  ngOnInit() {
  }


  login(email: String, password: String){
    if(email=="" || password==""){
      alert("Email/Password must not be empty");
      return;
    }

    this.webService.loginAPI({"email":email, "password":password}); 
    }


  }
}

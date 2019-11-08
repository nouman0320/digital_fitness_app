import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn: Boolean = false;


  constructor() {
    var loggedIn = localStorage.getItem('login_status');
    if(loggedIn == null){
      this.isUserLoggedIn = false;
    }
    else if(loggedIn == "true"){
      this.isUserLoggedIn = true;
    }
    else this.isUserLoggedIn = false;
    
   }


  loginUser(){
    localStorage.setItem('login_status', "true");
    this.isUserLoggedIn = true;
  }

  logoutUser(){
    localStorage.removeItem('login_status');
    this.isUserLoggedIn = false;
  }
}

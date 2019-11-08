import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn: Boolean = false;
  _id: String = "";
  _email: String = "";


  constructor() {
    var loggedIn = localStorage.getItem('login_status');
    if(loggedIn == null){
      this.isUserLoggedIn = false;
    }
    else if(loggedIn == "true"){
      this.isUserLoggedIn = true;
      this._id = localStorage.getItem('_id');
      this._email = localStorage.getItem('email');
    }
    else this.isUserLoggedIn = false;
    
   }


  loginUser(_id: any, email: any){
    localStorage.setItem('login_status', "true");
    localStorage.setItem('_id', _id);
    localStorage.setItem('email', email);
    this.isUserLoggedIn = true;
  }

  logoutUser(){
    localStorage.removeItem('login_status');
    localStorage.removeItem('_id');
    localStorage.removeItem('email');
    this.isUserLoggedIn = false;
  }
}

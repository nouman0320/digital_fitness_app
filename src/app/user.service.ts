import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn: Boolean = false;

  _id: String = "";
  email: String = "";
  firstName: String = "";
  lastName: String = "";
  weight: number = 0;
  height: number = 0;

  bmi: number = 0;

  bmi_category: String = "NA";


  constructor(public webService: WebService) {
    var loggedIn = localStorage.getItem('login_status');
    //console.log(loggedIn);
    if(loggedIn == null){
      this.isUserLoggedIn = false;
    }
    else if(loggedIn == "true"){
      this.isUserLoggedIn = true;
      this._id = localStorage.getItem('_id');
      this.email = localStorage.getItem('email');
      this.getUserDetails();
    }
    else this.isUserLoggedIn = false;
    
   }
   
  loginUser(_idx: any, email: any){
    localStorage.setItem('login_status', "true");
    localStorage.setItem('_id', _idx);
    localStorage.setItem('email', email);
    this.isUserLoggedIn = true;
    this._id = _idx;
    this.email = email;
    this.getUserDetails();
  }

  logoutUser(){
    localStorage.removeItem('login_status');
    localStorage.removeItem('_id');
    localStorage.removeItem('email');
    this.isUserLoggedIn = false;
  }

  updateBMI(){
    //console.log("update bmi called");
    this.bmi = this.weight/(this.height)**2;


      if(this.bmi <= 18.5)
      {
        this.bmi_category = "Underweight";
      }
      else if(this.bmi > 18.5 && this.bmi <=23){
        this.bmi_category = "Normal Range";
      }
      else if(this.bmi > 23 && this.bmi <=25){
        this.bmi_category = "Overweight - At Risk";
      }
      else if(this.bmi > 25 && this.bmi <= 30){
        this.bmi_category = "Overweight - Moderately Obese";
      }
      else if(this.bmi > 30){
        this.bmi_category = "Overweight - Severely Obese";
      }
  }

  getUserDetails(){
    this.webService.userDetailsAPI(this.email).subscribe(data =>{
      this.firstName = data['data']['first_name'];
      this.lastName = data['data']['last_name'];
      this.weight = data['data']['weight'];
      this.height = data['data']['height'];

      this.updateBMI();
        

    },
    err=>{
      console.log(err.error.message);
    },
    ()=>{

    });
  }
}


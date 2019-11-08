import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../web.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public router: Router, public webService: WebService, public userService: UserService) {
    if(this.userService.isUserLoggedIn == true){
      this.router.navigate(['/']);
    }
   }

  ngOnInit() {
  }

  register(email: String, firstName: String, lastName: String, password: String, weight: Number, height: Number){


    if(email == "" || firstName == "" || lastName == "" || password == ""){
      alert("One or more fields are empty");
      return;
    }

    if(weight < 10) {
      alert("Invalid weight");
      return;
    }

    if(height < 1){
      alert("Invalid height");
      return;
    } 

    const user = {
      "data":{
        "email": email,
        "first_name": firstName,
        "last_name": lastName,
        "password": password,
        "weight": weight,
        "height": height
      }
    }


    this.webService.registerAPI(user).subscribe(data=>{
      //this.userService.isUserLoggedIn = true;
      alert("Thank You for registering with us. Please login now");
      this.router.navigate(['/login']);
    }, err=>{
      alert(err.error.message);
    }, ()=>{

    });
  }

  switchToLogin(){
    this.router.navigate(['/login'])
  }




}

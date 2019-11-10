import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  newPassword: String = "";

  constructor(public userService: UserService, public router: Router, public webService: WebService) {
    if(!this.userService.isUserLoggedIn){
      this.router.navigate(['/login']);
    }

   }

  ngOnInit() {
  }

  navLogout(){
    this.userService.logoutUser();
    this.router.navigate(['/login']);
  }


  updateProfile(){



    if(this.userService.email == "" || this.userService.firstName == "" || this.userService.lastName == "" || this.newPassword == ""){
      alert("One or more fields are empty");
      return;
    }

    if(this.userService.weight < 10) {
      alert("Invalid weight");
      return;
    }

    if(this.userService.height < 1){
      alert("Invalid height");
      return;
    } 

    const user = {
      "data":{
        "_id": this.userService._id,
        "email": this.userService.email,
        "first_name": this.userService.firstName,
        "last_name": this.userService.lastName,
        "password": this.newPassword,
        "weight": this.userService.weight,
        "height": this.userService.height
      }
    }

    this.webService.updateProfileAPI(user).subscribe(data=>{
      alert("Profile is saved");
    },err=>{
      alert(err.error.message);
    });
  }


  deleteAccount(){

    this.webService.deleteProfileAPI(this.userService._id).subscribe(data=>{
      alert('Account is deleted');
      this.userService.logoutUser();
      this.router.navigate(['/login']);
    }, err=>{
      alert(err.error.message);
    });

  }
  

}

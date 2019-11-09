import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UserService, public router: Router, public webService: WebService) {
    //console.log(this.userService.isUserLoggedIn);
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

  updateWeightHeight(){
    
    const update = {
      "_id":this.userService._id,
      "weight":this.userService.weight,
      "height":this.userService.height
    }

    this.webService.updateWeightHeightAPI(update).subscribe(data=>{
      alert("Weight and height are updated");
    }, err =>{
      alert(err.error.message);
    });

  }

}

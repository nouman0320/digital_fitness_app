import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) {
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

}

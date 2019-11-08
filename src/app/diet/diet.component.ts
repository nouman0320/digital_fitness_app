import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

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

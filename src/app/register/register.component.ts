import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  register(email: String, firstName: String, lastName: String, password: String, weight: Number, height: Number){

  }

  switchToLogin(){
    this.router.navigate(['/login'])
  }




}

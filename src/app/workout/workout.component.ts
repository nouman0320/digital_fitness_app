import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { WebService } from '../web.service';
import { Workout } from '../Models/workout';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {


  workouts: Workout[];

  selectedValueExercise: any = "0";
  selectedValueType:any = "0";

  customType: String = "";

  warmup: any = false;
  stretched: any = false;
  achieved: any = false;


  cardio_options:any = ['Running','Walking','Swimming','Jumping', 'Bowling', 'Cycling'];
  weight_options:any = ['Crunches', 'Dumbbells', 'Curls', 'Dead Lift'];
  dance_options:any = ['Zumba Dancing', 'Hula Hoop Dancing', 'Salsa'];

  type_options:any = this.weight_options;

 
  constructor(public userService: UserService, public router: Router, public webService: WebService) {
    if(!this.userService.isUserLoggedIn){
      this.router.navigate(['/login']);
    }
   }

  ngOnInit() {
    this.getWorkouts();
  }


  getOptions(){

    if(this.selectedValueExercise == 0)
    {
      return this.cardio_options;
    }
    else if(this.selectedValueExercise == 1){
      return this.weight_options;
    }
    else if(this.selectedValueExercise == 2){
      return this.dance_options;
    }
    return [];
  }

  navLogout(){
    this.userService.logoutUser();
    this.router.navigate(['/login']);
    //console.log('test');
  }


  getWorkouts(){
    this.webService.getWorkoutsAPI(this.userService._id).subscribe(data=>{
      this.workouts = data.data;
    });
  }

  removeWorkout(_id: String){
    this.webService.removeWorkoutsAPI(_id).subscribe(data=>{
      this.getWorkouts();
    }, err=>{
      alert(err.error.message);
    });
  }

  addWorkout(){
    var nWorkout = new Workout();
    
    if(this.selectedValueExercise == 0){
      nWorkout.category = "Cardio";
      nWorkout.type = this.cardio_options[this.selectedValueType];
    }
    else if(this.selectedValueExercise == 1){
      nWorkout.category = "Weight";
      nWorkout.type = this.weight_options[this.selectedValueType];
    }
    else if(this.selectedValueExercise == 2){
      nWorkout.category = "Dance aerobic";
      nWorkout.type = this.dance_options[this.selectedValueType];
    }
    else if(this.selectedValueExercise == 3){
      nWorkout.category = "Custom";
      nWorkout.type = this.customType;
    }

    nWorkout.warmedup = this.warmup;
    nWorkout.stretched = this.stretched;
    nWorkout.achieved = this.achieved;

    nWorkout._userId = this.userService._id;

    //console.log(nWorkout);

    this.webService.newWorkoutAPI(nWorkout).subscribe(data=>{
      alert("Workout is added");
      this.getWorkouts();
    }, err => {
      alert(err.error.message);
    });
  }

}

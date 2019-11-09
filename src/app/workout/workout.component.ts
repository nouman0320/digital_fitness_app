import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { YoutubeService } from '../youtube.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  videos: any[];
  selectedValueExercise: any = "0";
  selectedValueType:any = "0";

  warmup: any = false;
  stretched: any = false;
  achieved: any = true;


  cardio_options:any = ['Running','Walking','Swimming','Jumping', 'Bowling', 'Cycling'];
  weight_options:any = ['Crunches', 'Dumbbells', 'Curls', 'Dead Lift'];
  dance_options:any = ['Zumba Dancing', 'Hula Hoop Dancing', 'Salsa'];

  type_options:any = this.weight_options;

  private unsubscribe$: Subject<any> = new Subject();

  constructor(public userService: UserService, public router: Router, private youTubeService: YoutubeService) {
    if(!this.userService.isUserLoggedIn){
      this.router.navigate(['/login']);
    }
   }

  ngOnInit() {
    this.videos = [];
    this.youTubeService
    .getVideosForChanel('UC_LtA_EtCr7Jp5ofOsYt18g', 15)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(lista => {
    for (let element of lista["items"]) {
    this.videos.push(element)
    }
    });
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

}

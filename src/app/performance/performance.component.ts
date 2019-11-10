import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { YoutubeService } from '../youtube.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  videos: any[];

  query_string: String = "improve+your+agility";
  section_title: String = "Agility"

  private unsubscribe$: Subject<any> = new Subject();

  constructor(public userService: UserService, public router: Router, private youTubeService: YoutubeService) {
    if(!this.userService.isUserLoggedIn){
      this.router.navigate(['/login']);
    }
   }

  ngOnInit() {
    this.getVideos(this.query_string);
  }


  switchSection(n){
    if(n==0){
      this.query_string = "improve+your+agility";
      this.section_title = "Agility";
    } else if(n==1){
      this.query_string = "how+to+improve+your+balance+while+walking+running";
      this.section_title = "Balance";
    } else if(n==2){
      this.query_string = "how+to+improve+your+speed+running+cycling+swimming";
      this.section_title = "Speed";
    } else if(n==3){
      this.query_string = "how+to+improve+your+body+flexibility";
      this.section_title = "Flexibility";
    } else if(n==4){
      this.query_string = "how+to+improve+your+cardio+vescular+endurance";
      this.section_title = "Cardio Vescular Endurance";
    }

    this.getVideos(this.query_string);
  }


  getVideos(query){
    this.videos = [];
    this.youTubeService
    .getVideosForChanel(15, query)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(lista => {
    for (let element of lista["items"]) {
    this.videos.push(element)
    }
    });
  }

  navLogout(){
    this.userService.logoutUser();
    this.router.navigate(['/login']);
  }

}

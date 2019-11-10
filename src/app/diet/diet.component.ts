import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { YoutubeService } from '../youtube.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

  videos: any[];

  private unsubscribe$: Subject<any> = new Subject();

  constructor(public userService: UserService, public router: Router, private youTubeService: YoutubeService) {
    if(!this.userService.isUserLoggedIn){
      this.router.navigate(['/login']);
    }
   }

  ngOnInit() {
    this.videos = [];
    this.youTubeService
    .getVideosForChanel(15,"fitness+diet+plan")
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

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { WebService } from '../web.service';
import { Progress } from '../Models/progress';

@Component({
  selector: 'app-progress-activity',
  templateUrl: './progress-activity.component.html',
  styleUrls: ['./progress-activity.component.css']
})
export class ProgressActivityComponent implements OnInit {

  progresses: Progress[];

  constructor(public userService: UserService, public webService: WebService) { }

  ngOnInit() {
    this.getLogs();
  }



  getLogs(){
    this.webService.getLogsAPI(this.userService._id).subscribe(data=>{
      this.progresses = data.data;
    });
  }

  removeLog(_id: String){
    this.webService.removeLogsAPI(_id).subscribe(data=>{
      this.getLogs();
    }, err=>{
      alert(err.error.message);
    });
  }


  updateLogs(log: String){
    if(log == ""){
      alert("invalid input");
      return;
    }

    const progress = {
      '_userId': this.userService._id,
      'log': log
    }

    this.webService.newLogAPI(progress).subscribe(data=>{
      alert("progress log added");
      this.getLogs();
    }, err =>{
      alert(err.error.message);
    });

  }

}

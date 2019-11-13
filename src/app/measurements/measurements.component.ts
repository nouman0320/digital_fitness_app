import { Component, OnInit } from '@angular/core';
import { Measurement } from '../Models/measurement';
import { WebService } from '../web.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  measurements:Measurement[];

  constructor(public webService: WebService, public userService: UserService) { }

  ngOnInit() {
    this.getMeasurements();
  }


  getMeasurements(){
    this.webService.getMeasurementsAPI(this.userService._id).subscribe(data=>{
      this.measurements = data.data;
    });
  }

  removeMeasurement(_id: String){
    this.webService.removeMeasurementsAPI(_id).subscribe(data=>{
      this.getMeasurements();
    }, err=>{
      alert(err.error.message);
    });
  }


  updateMeasurements(waist: Number, hips: Number, chest: Number, abs: Number, arms: Number){
    if(waist == 0 || hips == 0 || chest == 0 || abs == 0 || arms == 0){
      alert("invalid input");
      return;
    }

    const measurement = {
      '_userId': this.userService._id,
      'waist': waist,
      'hips': hips,
      'chest': chest,
      'abs': abs,
      'arms': arms
    }

    this.webService.newMeasurementAPI(measurement).subscribe(data=>{
      alert("measurement added");
      this.getMeasurements();
    }, err =>{
      alert(err.error.message);
    });

  }

}

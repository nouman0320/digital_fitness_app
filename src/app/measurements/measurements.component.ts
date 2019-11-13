import { Component, OnInit } from '@angular/core';
import { Measurement } from '../Models/measurement';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  measurements:Measurement[];

  constructor() { }

  ngOnInit() {
  }

  updateMeasurements(waist: Number, hips: Number, chest: Number, abs: Number, arms: Number){
    if(waist == 0 || hips == 0 || chest == 0 || abs == 0 || arms == 0){
      alert("invalid input");
      return;
    }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(public http: HttpClient) { }


  updateWeightHeightAPI(update: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(update);
    return this.http.post('/api/users/update-weight-height' , body, {
      headers: headers
    });
  }

  loginAPI(user: any): Observable<any>{

    //console.log("loginAPI")

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(user);
    return this.http.post('/api/users/login' , body, {
      headers: headers
    });
  }


  updateProfileAPI(user: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(user);
    return this.http.post('/api/users/update' , body, {
      headers: headers
    });
  }

  registerAPI(user: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(user);
    return this.http.post('/api/users/create' , body, {
      headers: headers
    });
  }

  newWorkoutAPI(workout: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(workout);
    return this.http.post('/api/workouts/add' , body, {
      headers: headers
    });
  }

  newMeasurementAPI(measurement: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(measurement);
    return this.http.post('/api/measurements/add' , body, {
      headers: headers
    });
  }


  newLogAPI(log: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(log);
    return this.http.post('/api/logs/add' , body, {
      headers: headers
    });
  }

  deleteProfileAPI(_id: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.delete('api/users/'+_id, {
      headers: headers
    });
  }

  removeWorkoutsAPI(_id: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.delete('api/workouts/'+_id, {
      headers: headers
    });
  }

  getWorkoutsAPI(_userId: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get('api/workouts/'+_userId, {
      headers: headers
    });
  }


  removeMeasurementsAPI(_id: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.delete('api/measurements/'+_id, {
      headers: headers
    });
  }

  getMeasurementsAPI(_userId: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get('api/measurements/'+_userId, {
      headers: headers
    });
  }



  removeLogsAPI(_id: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.delete('api/logs/'+_id, {
      headers: headers
    });
  }

  getLogsAPI(_userId: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get('api/logs/'+_userId, {
      headers: headers
    });
  }

  userDetailsAPI(email: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get('api/users/'+email, {
      headers: headers
    });
  }
}

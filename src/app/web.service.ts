import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(public http: HttpClient) { }


  loginAPI(user: any): Observable<any>{

    //console.log("loginAPI")

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(user);
    return this.http.post('/api/users/login' , body, {
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

  userDetailsAPI(email: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get('api/users/'+email, {
      headers: headers
    });
  }
}

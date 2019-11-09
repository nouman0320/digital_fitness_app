
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = 'AIzaSyB5lydF8njMVLlvmMBpS-c6V4tXsDso-L4';

  constructor(public http: HttpClient) { }

    getVideosForChanel(maxResults): Observable<Object> {
      //https://www.youtube.com/results?
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&q=fitness+diet+plan'+'&order=relevance&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}

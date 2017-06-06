import { Injectable } from '@angular/core';
import { Http,RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// service used for reusable component
@Injectable()
export class MoviesService {

constructor(private http: Http) {}
// function to get result from the database
searchMovie( movieName: string ) {
  // return this.http.get('https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query='+movieName+'&language=en-US&api_key=ee05a8f1dc753bb6e15ef75b6bfcd8af')
  //    .map((response) => response.json().results || []);
  return this.http.get('https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query='+movieName+'&language=en-US&api_key=8f5d948e528c5ef8b2eb93deda363671').map((response) => response.json().results || []);

  }


  favMovie()
  {
    console.log("service angular2");
    return this.http.get('http://localhost:8080/v1/api/movie').map((response) => response.json()|| []);
  }

  saveFavMovie(title:string,date:string,poster:string)
  {
    console.log("inside save service");
    let body = JSON.stringify({title:title,release_date:date,poster_path:poster});
    let headers = new Headers({ 'content-type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8080/v1/api/movie',body,options).map((response) => response.json());
  }
}

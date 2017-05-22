import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// service used for reusable component
@Injectable()
export class MoviesService {

constructor(private http: Http) {}
// function to get result from the database
searchMovie( movieName: string ) {
    return this.http
               .get('http://www.omdbapi.com/?s=' +movieName)
               .map(response => response.json()['Search']);
  }
}

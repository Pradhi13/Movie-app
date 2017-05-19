import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MoviesService {


  constructor(private http: Http) {}

  searchMovie( movieName: string ) {
  console.log( 'inside service' );

    return this.http
               .get('http://www.omdbapi.com/?s=' +movieName)
               .map(response => response.json()['Search']);
  }
}

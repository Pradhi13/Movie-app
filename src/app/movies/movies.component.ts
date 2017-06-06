import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesService } from './movies.service';
import {Observable} from 'rxjs/Observable';


@Component({
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
moviesName = [];

a=[];

  constructor(
    private MoviesService: MoviesService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
// match the param to the service to get the result
    this.route.params
      .switchMap((params: Params) => this.MoviesService.searchMovie(params['movieName']))
      // stores the data in a moviesName array
      .subscribe(moviesName => this.moviesName = moviesName);
      {
        console.log(this.moviesName);

      }
  }

  saveMovie(title: string, date:string, poster:string)
  {
    console.log("inside saveMovie")
    this.MoviesService.saveFavMovie(title,date,poster).subscribe(
       data => {
         // refresh the list
         return true;
       },
       error => {
         console.error("Error saving movie!");
         return Observable.throw(error);
       }
    );
  }
}

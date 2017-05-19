import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesService } from './movies.service';
@Component({
  selector: 'movie-comp',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
moviesName = [];
  constructor(
    private MoviesService: MoviesService,
    private route: ActivatedRoute) {}
  ngOnInit(): void {

    this.route.params
      .switchMap((params: Params) => this.MoviesService.searchMovie(params['movieName']))
      .subscribe(moviesName => this.moviesName = moviesName);
  }
}

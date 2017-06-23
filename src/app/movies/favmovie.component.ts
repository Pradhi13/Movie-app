import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component(
{
  templateUrl : './favmovie.component.html',
  styleUrls:['./favmovie.component.css']
})
export class FavmovieComponent {
a=[];
  constructor(private movieService:MoviesService,private route: ActivatedRoute){}
ngOnInit():void{
console.log("hi i am fav");
  this.route.params
    .switchMap((params: Params) => this.movieService.favMovie()).subscribe(a => this.a =a);
    // stores the data in a moviesName array





}


}

import { Component } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component'
import { MoviesService } from '../movies/movies.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-details',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  a=[];
  constructor(private moviesService: MoviesService){}

  result()
  {
    this.moviesService.favMovie().subscribe(a=>this.a=a);
  //  this.router.navigate(["favourite"]);
  }
}

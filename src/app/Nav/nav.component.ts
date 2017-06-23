import { Component } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component'
import { MoviesService } from '../movies/movies.service'
import { Router } from '@angular/router';
import { FavmovieComponent } from '../movies/favmovie.component';
@Component({
  selector: 'app-nav-details',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private router: Router){}

  result()
  {
    console.log("started ");
    this.router.navigate(['favourite']);
    //this.moviesService.favMovie().subscribe(a=>this.a=a);
  //  this.router.navigate(["favourite"]);
  }
}

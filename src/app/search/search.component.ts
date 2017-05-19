import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-details',
  templateUrl: './search.component.html',
})
export class SearchComponent  {
 constructor( private router: Router ) { }

  onSearch(movieName: string) {
    this.router.navigate(['search', movieName]);
};
}

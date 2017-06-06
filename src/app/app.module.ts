import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './Nav/nav.component';
import { SearchComponent } from './search/search.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/movies.service';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    RouterModule.forRoot([
      {
        path: 'search/:movieName',  component: MoviesComponent
      },

      // {
      //   path:'favourite', component: MoviesComponent
      // }
    ])
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule { }

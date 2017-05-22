

import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { Movie } from '../model/movie';
import { MoviesComponent } from './movies.component';
describe('MovieDetailsComponent', () => {
  let comp: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let de: DebugElement;  // the DebugElement
  let el: HTMLElement; // the DOM element
  const expectedMovie = {
    'Title': 'Batman Begins',
    'Year': '2005',
    'imdbID': 'tt0372784',
    'Type': 'movie',
    'Poster': 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg'
  };
  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ] // to ignore unrecognized[angular-material] elements and attributes
    }).compileComponents();  // compile template and css
  }));
  // sync beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    comp    = fixture.componentInstance;
    // setting movie value to component
    //comp.movie = expectedMovie;
  });
  it('should display movie title', () => {
    // selecting Debug Element that contains Title
    de = fixture.debugElement.query(By.css('md-card-title'));
    // getting DOM Element from Debug Element
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain(expectedMovie.Title);
  });
  it('should display movie Year', () => {
    // selecting Debug Element that contains Year
    de = fixture.debugElement.query(By.css('md-card-subtitle'));
    // getting DOM Element from Debug Element
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain(expectedMovie.Year);
  });
  it('should display movie Poster', () => {
    // selecting Debug Element that contains Poster
    de = fixture.debugElement.query(By.css('img'));
    // getting DOM Element from Debug Element
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.getAttribute('src')).toEqual(expectedMovie.Poster);
  });
  it('should display Type', () => {
    // selecting Debug Element that contains Type
    de = fixture.debugElement.query(By.css('md-card-subtitle'));
    // getting DOM Element from Debug Element
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain(expectedMovie.Type);
  });
  it('should not display ImdbID', () => {
    // selecting Debug Element that may contains ImdbID
    de = fixture.debugElement.query(By.css('md-card'));
    // getting DOM Element from Debug Element
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent.includes(expectedMovie.imdbID)).toBeFalsy();
  });
});

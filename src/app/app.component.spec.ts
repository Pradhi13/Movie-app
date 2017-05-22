import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';
import { AppComponent } from './app.component';
// import { ComponentFixtureAutoDetect } from '@angular/core/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debug: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
      // providers: [ {provide:ComponentFixtureAutoDetect, useValue: true}
  //    ]
    })

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    debug = fixture.debugElement.query(By.css('h2'));
        el = debug.nativeElement;
  });



  it('display original title', () =>{
    fixture.detectChanges();
    expect(el.textContent).toContain(component.title)
  });

  it('display different title', () =>{
    component.title= 'Movie App Works'
    fixture.detectChanges();
    expect(el.textContent).toContain(component.title)
  });

  it('no title', () =>{
    fixture.detectChanges();
    expect(el.textContent).toBe(' ')

  });

});

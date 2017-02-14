/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Todo } from './todo';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  // Check @ the app level
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // Check @ the component level
  it(`should have a newTodo todo`, async(() => {
   let fixture = TestBed.createComponent(AppComponent);
   let app = fixture.debugElement.componentInstance;
   expect(app.newTodo instanceof Todo).toBeTruthy()
 }));

 // Check for the presence of the expected title at the top of the page
 it('should display "Todos" in h1 tag', async(() => {
   let fixture = TestBed.createComponent(AppComponent);
   fixture.detectChanges();
   let compiled = fixture.debugElement.nativeElement;
   expect(compiled.querySelector('h1').textContent).toContain('Todos');
 }));

});// describe

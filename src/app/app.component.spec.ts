import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

// Jasmine/Karma should normally be replaced with something like Jest in a professional application
// This test has only been added as an example
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([]), MatButtonModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

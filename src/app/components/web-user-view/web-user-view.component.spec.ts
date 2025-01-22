import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WebUserViewComponent} from './web-user-view.component';

describe('WebUserComponent', () => {
  let component: WebUserViewComponent;
  let fixture: ComponentFixture<WebUserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebUserViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WebUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

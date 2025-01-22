import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeEmployeeViewComponent } from './backoffice-employee-view.component';

describe('BackofficeEmployeeViewComponent', () => {
  let component: BackofficeEmployeeViewComponent;
  let fixture: ComponentFixture<BackofficeEmployeeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackofficeEmployeeViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackofficeEmployeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

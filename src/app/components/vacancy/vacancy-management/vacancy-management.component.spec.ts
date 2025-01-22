import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyManagementComponent } from './vacancy-management.component';

describe('VacancyManagementComponent', () => {
  let component: VacancyManagementComponent;
  let fixture: ComponentFixture<VacancyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

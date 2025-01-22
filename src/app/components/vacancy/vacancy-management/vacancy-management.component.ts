import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatCard} from '@angular/material/card';
import {Company} from '../../../models/company.model';
import {VacancyService} from '../../../services/vacancy/vacancy.service';

@Component({
  selector: 'app-vacancy-management',
  standalone: true,
  imports: [
    MatCard
  ],
  templateUrl: './vacancy-management.component.html',
  styleUrl: './vacancy-management.component.scss'
})
export class VacancyManagementComponent implements OnInit {
  @Input() company!: Company;
  vacancyForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private vacancyService: VacancyService
  ) {
  }

  ngOnInit(): void {
    this.vacancyForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      active: [true],
    });
  }

  // TODO
  // addVacancy(): void {
  //   if (this.vacancyForm.valid) {
  //     this.companyService
  //       .addVacancy(this.company.id, this.vacancyForm.value)
  //       .subscribe(() => {
  //         // Refresh vacancies
  //       });
  //   }
  // }
  //
  // deleteVacancy(vacancyId: string): void {
  //   this.companyService
  //     .deleteVacancy(this.company.id, vacancyId)
  //     .subscribe(() => {
  //       // Refresh vacancies
  //     });
  // }
}

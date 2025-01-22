import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {MatButton} from "@angular/material/button";
import {MatCard, MatCardTitle} from "@angular/material/card";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Company} from '../../../models/company.model';
import {Vacancy} from '../../../models/vacancy.model';
import {CompanyService} from '../../../services/company/company.service';
import {VacancyService} from '../../../services/vacancy/vacancy.service';

/**
 * Component for creating a new vacancy for a selected company.
 *
 * This component allows users to create a new vacancy by selecting a company,
 * providing a title, description, and setting the vacancy to active or inactive.
 * It uses Reactive Forms to handle the form validation and submission.
 *
 * The component also fetches the list of companies from the `CompanyService` to
 * populate the company selection dropdown. Once the vacancy is added successfully,
 * the form is reset, and the companies list is refreshed.
 *
 * @example
 * <app-create-vacancy></app-create-vacancy>
 *
 * @see {@link CompanyService} for API interaction related to companies and vacancies.
 */
@Component({
  selector: 'app-create-vacancy',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButton,
    MatCard,
    MatCardTitle,
    MatCheckbox,
    MatFormField,
    MatInput,

  ],
  templateUrl: './create-vacancy.component.html',
  styleUrl: './create-vacancy.component.scss'
})
export class CreateVacancyComponent implements OnInit {
  vacancyForm: FormGroup;
  companies: Company[] = [];

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private vacancyService: VacancyService
  ) {
    this.vacancyForm = this.fb.group({
      companyId: ['', Validators.required],
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      active: [true]
    });
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getAllCompanies().subscribe((companies: Company[]) => {
      this.companies = companies;
    });
  }

  addVacancy(): void {
    if (this.vacancyForm.valid) {
      const {companyId, ...vacancy} = this.vacancyForm.value;
      this.vacancyService.addVacancy(companyId, vacancy as Vacancy).subscribe(() => {
        alert('Vacancy added successfully!');
        this.companyService.fetchCompanies(); // Refresh companies to reflect the updated data
        this.vacancyForm.reset({active: true});
      });
    }
  }
}

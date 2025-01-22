import {Component} from '@angular/core';
import {MatTab} from "@angular/material/tabs";
import {CompanyManagementComponent} from '../company/company-management/company-management.component';
import {VacancyManagementComponent} from '../vacancy/vacancy-management/vacancy-management.component';

@Component({
  selector: 'app-backoffice-employee-view',
  standalone: true,
  imports: [
    MatTab,
    CompanyManagementComponent,
    VacancyManagementComponent
  ],
  templateUrl: './backoffice-employee-view.component.html',
  styleUrl: './backoffice-employee-view.component.css'
})
export class BackofficeEmployeeViewComponent {
}

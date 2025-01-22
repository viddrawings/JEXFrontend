import {Component, OnInit} from '@angular/core';
import {Vacancy} from '../../models/vacancy.model';
import {Company} from '../../models/company.model';
import {CompanyService} from '../../services/company/company.service';
import {MatDialog} from '@angular/material/dialog';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatButton} from '@angular/material/button';
import {VacancyService} from '../../services/vacancy/vacancy.service';
import {VacancyDialogComponent} from '../vacancy/vacancy-dialog/vacancy-dialog.component';
import {CompanyDialogComponent} from '../company/company-dialog/company-dialog.component';

@Component({
  selector: 'app-backoffice-employee-view',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatButton,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
  ],
  templateUrl: './backoffice-employee-view.component.html',
})
export class BackofficeEmployeeViewComponent implements OnInit {
  companies: Company[] = [];
  displayedColumns: string[] = ['name', 'address', 'vacancies', 'actions'];

  constructor(
    private companyService: CompanyService,
    private vacancyService: VacancyService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.loadCompanies();
  }
  
  loadCompanies(): void {
    this.companyService.getAllCompanies().subscribe((companies: Company[]) => {
      this.companies = companies;
    });
  }

  openCompanyDialog(company?: Company): void {
    const dialogRef = this.dialog.open(CompanyDialogComponent, {
      data: company || {},
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      const action = company ? this.updateCompany : this.addCompany;
      action.call(this, result);
    });
  }

  addCompany(company: Company): void {
    this.companyService.createCompany(company).subscribe(() => {
      this.loadCompanies();
    });
  }

  updateCompany(company: Company): void {
    this.companyService.updateCompany(company).subscribe(() => {
      this.loadCompanies();
    });
  }

  deleteCompany(company: Company): void {
    this.companyService.deleteCompany(company.id).subscribe(() => {
      this.loadCompanies();
    });
  }

  openVacancyDialog(company: Company, vacancy?: Vacancy): void {
    const dialogRef = this.dialog.open(VacancyDialogComponent, {
      data: {companyId: company.id, vacancy: vacancy || {}},
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      const action = vacancy ? this.updateVacancy : this.addVacancy;
      action.call(this, company.id, result);
    });
  }

  addVacancy(companyId: string, vacancy: Vacancy): void {
    this.vacancyService.addVacancy(companyId, vacancy).subscribe(() => {
      this.loadCompanies();
    });
  }

  updateVacancy(companyId: string, vacancy: Vacancy): void {
    this.vacancyService.updateVacancy(companyId, vacancy).subscribe(() => {
      this.loadCompanies();
    });
  }

  deleteVacancy(companyId: string, vacancy: Vacancy): void {
    this.vacancyService.deleteVacancy(companyId, vacancy.id).subscribe(() => {
      this.loadCompanies();
    });
  }
}

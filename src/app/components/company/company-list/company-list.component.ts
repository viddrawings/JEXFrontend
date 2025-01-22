import {Component, OnInit} from '@angular/core';
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
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {Company} from '../../../models/company.model';
import {CompanyService} from '../../../services/company/company.service';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow
  ],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'address', 'vacancies'];
  filteredCompanies: MatTableDataSource<Company> = new MatTableDataSource<Company>();

  constructor(
    private companyService: CompanyService
  ) {
  }

  ngOnInit(): void {
    // Subscribe to the BehaviorSubject to handle real-time updates
    this.companyService.companies$.subscribe((companies) => {
      this.filteredCompanies.data = companies
        .map((company) => ({
          ...company,
          vacancies: company.vacancies?.filter((vacancy) => vacancy.active) || []  // Filter only active vacancies
        }))
        .filter((company) => company.vacancies.length > 0);  // Only keep companies with at least one active vacancy
    });

    // Trigger the initial fetch to populate the BehaviorSubject
    this.companyService.fetchCompanies();
  }
}

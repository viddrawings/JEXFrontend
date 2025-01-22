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
    this.companyService.getCompaniesWithActiveVacancies().subscribe((companies: Company[]) => {
      this.filteredCompanies.data = companies;
    });
  }
}

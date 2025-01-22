import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder} from '@angular/forms';
import {MatCard} from '@angular/material/card';
import {Company} from '../../../models/company.model';
import {CompanyService} from '../../../services/company/company.service';

@Component({
  selector: 'app-company-management',
  standalone: true,
  imports: [
    MatCard,
  ],
  templateUrl: './company-management.component.html',
})
export class CompanyManagementComponent implements OnInit {
  companies: Company[] = [];
  displayedColumns: string[] = ['name', 'address', 'actions'];

  constructor(
    private companyService: CompanyService,
    private dialog: MatDialog,
    private fb: FormBuilder
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

  openAddDialog(): void {
    // Open a dialog to create a company
  }

  openEditDialog(company: Company): void {
    // Open a dialog to edit a company
  }

  deleteCompany(id: string): void {
    this.companyService.deleteCompany(id).subscribe(() => {
      this.loadCompanies();
    });
  }
}

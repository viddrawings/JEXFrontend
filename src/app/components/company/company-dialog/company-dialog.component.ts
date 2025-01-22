import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Company} from '../../../models/company.model';

@Component({
  selector: 'app-company-dialog',
  imports: [],
  templateUrl: './company-dialog.component.html',
  styleUrl: './company-dialog.component.css'
})
export class CompanyDialogComponent {
  companyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CompanyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Company
  ) {
    this.companyForm = this.fb.group({
      name: [data.name || '', Validators.required],
      address: [data.address || '', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.companyForm.valid) {
      this.dialogRef.close(this.companyForm.value);
    }
  }
}

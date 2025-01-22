import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {Company} from '../../../models/company.model';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-company-dialog',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatFormField,
    MatInput,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './company-dialog.component.html',
})
export class CompanyDialogComponent {
  companyForm: FormGroup;
  isEditMode: boolean;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CompanyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Partial<Company> = {}
  ) {
    this.isEditMode = !!data.name;

    this.companyForm = this.fb.group({
      name: [data.name || '', Validators.required],
      address: [data.address || '', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.companyForm.valid) {
      this.dialogRef.close({
        ...this.data, // Retain existing properties (e.g., `id`) if editing
        ...this.companyForm.value,
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(null); // Close dialog without saving
  }
}

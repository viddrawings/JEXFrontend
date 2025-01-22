import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {Vacancy} from '../../../models/vacancy.model';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-vacancy-dialog',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatCheckbox,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './vacancy-dialog.component.html',
})
export class VacancyDialogComponent {
  vacancyForm: FormGroup;
  isEditMode: boolean;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<VacancyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { companyId: number; vacancy: Partial<Vacancy> }
  ) {
    this.isEditMode = !!data.vacancy?.title;

    this.vacancyForm = this.fb.group({
      title: [data.vacancy?.title || '', Validators.required],
      description: [data.vacancy?.description || ''],
      active: [data.vacancy?.active ?? true], // Default to true if not provided
    });
  }

  onSubmit(): void {
    if (this.vacancyForm.valid) {
      console.log('Form submitted:', this.vacancyForm.value, this.data);
      this.dialogRef.close({
        ...this.data.vacancy, // Retain existing properties if editing
        ...this.vacancyForm.value,
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}

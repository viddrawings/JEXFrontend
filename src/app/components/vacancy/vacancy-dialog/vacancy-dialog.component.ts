import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Vacancy} from '../../../models/vacancy.model';

@Component({
  selector: 'app-vacancy-dialog',
  imports: [],
  templateUrl: './vacancy-dialog.component.html',
  styleUrl: './vacancy-dialog.component.css'
})
export class VacancyDialogComponent {
  vacancyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<VacancyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { companyId: number, vacancy: Vacancy }
  ) {
    this.vacancyForm = this.fb.group({
      title: [data.vacancy.title || '', Validators.required],
      description: [data.vacancy.description || ''],
      active: [data.vacancy.active !== undefined ? data.vacancy.active : true]
    });
  }

  onSubmit(): void {
    if (this.vacancyForm.valid) {
      this.dialogRef.close(this.vacancyForm.value);
    }
  }
}

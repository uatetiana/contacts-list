import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatDialogRef
} from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { Contact } from '../../models/contact.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { dobValidator } from '../../validators/dob-validator';
import { CommonModule } from '@angular/common';
import { phoneNumberValidator } from '../../validators/phone-validator';

export interface DialogData extends Contact {}

@Component({
  selector: 'app-dialog-data',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatError
  ],
  templateUrl: './dialog-data.component.html',
  styleUrl: './dialog-data.component.scss'
})
export class DialogDataComponent implements OnInit {
  contactForm: FormGroup;
  isNewContact = true;

  get contactFormValue() {
    return { ...this.contactForm.value, id: this.data?.id };
  }

  constructor(
    public dialogRef: MatDialogRef<DialogDataComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData, 
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.data?.id) {
      this.isNewContact = false;
      this.contactForm.patchValue(this.data);
    }
  }

  private initForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      dateOfBirth: ['', [Validators.required, dobValidator()]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const newContact = this.contactForm.value;
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}

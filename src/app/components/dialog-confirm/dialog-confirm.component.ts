import { Component, Inject, Optional } from '@angular/core';
import {
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogData } from '../dialog-data/dialog-data.component';

@Component({
  selector: 'app-dialog-confirm',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './dialog-confirm.component.html',
  styleUrl: './dialog-confirm.component.scss'
})
export class DialogConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}

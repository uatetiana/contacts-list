import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, filter } from 'rxjs';
import { Contact } from './models/contact.model';
import { DialogDataComponent } from './components/dialog-data/dialog-data.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDataDialog(rowData?: Contact): Observable<Contact> {
    const dialogRef = this.dialog.open(DialogDataComponent, { data: rowData });
    return dialogRef.afterClosed().pipe(
      filter(Boolean)
    ) as Observable<Contact>;
  }

  openConfirmDialog(rowData: Contact): Observable<Contact> {
    const dialogRef = this.dialog.open(DialogConfirmComponent, { data: rowData });
    return dialogRef.afterClosed().pipe(
      filter(Boolean)
    ) as Observable<Contact>;
  }
}

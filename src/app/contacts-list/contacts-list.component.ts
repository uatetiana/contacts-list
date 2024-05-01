import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { of, switchMap, tap } from 'rxjs';
import { Contact } from '../models/contact.model';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import {
  MatDialogModule,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogService } from '../dialog.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule
  ],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren(MatMenu) matMenu: MatMenu;
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'phone', 'star'];
  contactList: MatTableDataSource<Contact>;

  constructor(
    private readonly contactsService: ContactsService,
    private readonly dialogService: DialogService,
    private router: Router,
    private readonly localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.contactList = new MatTableDataSource(this.contactsService.getContactList());
  }

  ngAfterViewInit() {
    this.contactList.paginator = this.paginator;
    this.contactList.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.contactList.filter = filterValue.trim().toLowerCase();

    if (this.contactList.paginator) {
      this.contactList.paginator.firstPage();
    }
  }

  createContact(): void {
    this.dialogService.openDataDialog()
    .pipe(
      switchMap((contact: Contact) => this.contactsService.createNewContact(contact)),
      tap(() => this.contactList = new MatTableDataSource(this.contactsService.getContactList()))
    ).subscribe();
  }

  viewDetails(rowData: Contact): void {
    this.router.navigate(['/details', rowData.id]);
  }

  edit(rowData: Contact): void {
    this.dialogService.openDataDialog(rowData)
    .pipe(
      switchMap((contact: Contact) => of(this.contactsService.updateContact(contact))),
      tap(() => this.contactList = new MatTableDataSource(this.contactsService.getContactList()))
    ).subscribe();
  }

  remove(rowData: Contact): void {
    this.dialogService.openConfirmDialog(rowData).pipe(
      switchMap((contact: Contact) => of(this.contactsService.deleteContactById(contact.id))),
      tap(() => this.contactList = new MatTableDataSource(this.contactsService.getContactList()))
    ).subscribe();
  }

}

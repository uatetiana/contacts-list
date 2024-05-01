import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact.model';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-contact-view',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.scss'
})
export class ContactViewComponent implements OnInit {
  @Output() editContactEvent = new EventEmitter<Observable<Contact>>();
  contact$: Observable<Contact | undefined>;
  contact: Contact;

  constructor(
    private readonly contactsService: ContactsService,
    private route: ActivatedRoute, 
    private readonly dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.contact$ = this.route.paramMap.pipe(
      map((param) => this.contactsService.contacts[Number(param.get('id')) - 1]),
      tap((contact) => this.contact = contact)
    )
  }

  editContact() {
    this.dialogService.openDataDialog(this.contact)
    .pipe(
        switchMap((contact: Contact) => of(this.contactsService.updateContact(contact))),
      ).subscribe();
  }

}

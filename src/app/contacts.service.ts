import { Injectable } from '@angular/core';
import { Contact, NewContact } from './models/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contact[] = [
    {
      "id": '1',
      "firstName": "Gerhardine",
      "lastName": "Giral",
      "email": "ggiral0@livejournal.com",
      "phone": "867-551-9271",
      "address": "Room 518",
      "dateOfBirth": "1960-04-01"
    },
    {
      "id": '2',
      "firstName": "Tobi",
      "lastName": "Leemans",
      "email": "tleemans1@ucsd.edu",
      "phone": "569-616-2741",
      "address": "7th Floor",
      "dateOfBirth": "1961-04-01"
    },
    {
      "id": '3',
      "firstName": "Francklyn",
      "lastName": "Singers",
      "email": "fsingers2@cbc.ca",
      "phone": "808-716-4426",
      "address": "Room 1062",
      "dateOfBirth": "1962-04-01"
    },
    {
      "id": '4',
      "firstName": "Shea",
      "lastName": "McAlarney",
      "email": "smcalarney3@noaa.gov",
      "phone": "534-224-0637",
      "address": "Apt 710",
      "dateOfBirth": "1963-04-01"
    },
    {
      "id": '5',
      "firstName": "Goober",
      "lastName": "Scimoni",
      "email": "gscimoni4@usa.gov",
      "phone": "573-908-8946",
      "address": "Apt 477",
      "dateOfBirth": "1964-04-01"
    },
    {
      "id": '6',
      "firstName": "Ulric",
      "lastName": "Trice",
      "email": "utrice5@imgur.com",
      "phone": "333-359-0003",
      "address": "9th Floor",
      "dateOfBirth": "1965-04-01"
    },
    {
      "id": '7',
      "firstName": "Twyla",
      "lastName": "Poleykett",
      "email": "tpoleykett6@bluehost.com",
      "phone": "135-675-3335",
      "address": "Suite 58",
      "dateOfBirth": "1966-04-01"
    },
    {
      "id": '8',
      "firstName": "Tim",
      "lastName": "Gaize",
      "email": "tgaize7@nps.gov",
      "phone": "421-534-6103",
      "address": "Room 146",
      "dateOfBirth": "1967-04-01"
    },
    {
      "id": '9',
      "firstName": "Augustine",
      "lastName": "Krzyzowski",
      "email": "akrzyzowski8@sohu.com",
      "phone": "323-222-8788",
      "address": "10th Floor",
      "dateOfBirth": "1968-04-01"
    },
    {
      "id": '10',
      "firstName": "Bethanne",
      "lastName": "Lougheid",
      "email": "blougheid9@bloomberg.com",
      "phone": "949-606-4766",
      "address": "Room 731",
      "dateOfBirth": "1969-04-01"
    }
  ];

  constructor(private http: HttpClient, private readonly localStorageService: LocalStorageService) {
    this.saveData();
  }

  saveData() {
    this.localStorageService.saveData('contactsData', this.contacts);
  }

  getContactList(): Contact[] {
    return this.localStorageService.getData('contactsData');
  }

  createNewContact(newContact: NewContact): Observable<NewContact> {
    return of(this.localStorageService.addContact('contactsData', newContact));
  }

  updateContact(contact: Contact): void {
    this.localStorageService.editContact('contactsData', contact.id, contact);
  }

  deleteContactById(id: string): void {
    this.localStorageService.removeContact('contactsData', id);
  }
}

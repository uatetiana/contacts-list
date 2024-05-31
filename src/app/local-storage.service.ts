import { Injectable } from '@angular/core';
import { Contact, NewContact } from './models/contact.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getData(key: string): Contact[] {
    const dataString = localStorage.getItem(key);
    return dataString ? JSON.parse(dataString) : [];
  }

  saveData(key: string, data: Contact[]): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  addContact(key: string, newData: NewContact): Contact {
    const existingData = this.getData(key);
    const newContact: Contact = {
      ...newData,
      id: this.generateUniqueId(),
    };
    existingData.push(newContact);
    this.saveData(key, existingData);
    return newContact;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }

  editContact(key: string, id: string, newData: Contact): void {
    const existingData = this.getData(key);
    const index = existingData.findIndex(item => item.id === id);
    if (index !== -1) {
      existingData[index] = { ...existingData[index], ...newData };
      this.saveData(key, existingData);
    }
  }

  removeContact(key: string, id: string): void {
    const existingData = this.getData(key);
    const filteredData = existingData.filter(item => item.id !== id);
    this.saveData(key, filteredData);
  }

  clearData(key: string): void {
    localStorage.removeItem(key);
  }
}

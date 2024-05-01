import { Injectable } from '@angular/core';
import { Contact } from './models/contact.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getData(key: string): any[] {
    const dataString = localStorage.getItem(key);
    return dataString ? JSON.parse(dataString) : [];
  }

  saveData(key: string, data: any[]): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  addContact(key: string, newData: any): Contact {
    const existingData = this.getData(key);
    newData.id = this.generateUniqueId();
    existingData.push(newData);
    this.saveData(key, existingData);
    return newData;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }

  editContact(key: string, id: number, newData: any): void {
    const existingData = this.getData(key);
    const index = existingData.findIndex(item => item.id === id);
    if (index !== -1) {
      existingData[index] = { ...existingData[index], ...newData };
      this.saveData(key, existingData);
    }
  }

  removeContact(key: string, id: number): void {
    const existingData = this.getData(key);
    const filteredData = existingData.filter(item => item.id !== id);
    this.saveData(key, filteredData);
  }

  clearData(key: string): void {
    localStorage.removeItem(key);
  }
}

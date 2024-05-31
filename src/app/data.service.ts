// import { Injectable } from '@angular/core';
// import { IDataService } from './models/data-service.model';
// import { Observable, of } from 'rxjs';
// import { LocalStorageService } from './local-storage.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService<T> implements IDataService<T> {
//   private storageKey = 'my-app-data';

//   constructor(private localStorageService: LocalStorageService) { }

//   getAll(): Observable<T[]> {
//     const data = this.localStorageService.getItem<T[]>(this.storageKey) || [];
//     return of(data);
//   }

//   getById(id: string): Observable<T> {
//     const data = this.localStorageService.getItem<T[]>(this.storageKey) || [];
//     const item = data.find((x: any) => x.id === id);
//     return of(item);
//   }

//   create(item: T): Observable<T> {
//     const data = this.localStorageService.getItem<T[]>(this.storageKey) || [];
//     data.push(item);
//     this.localStorageService.setItem(this.storageKey, data);
//     return of(item);
//   }

//   update(id: string, item: T): Observable<T> {
//     const data = this.localStorageService.getItem<T[]>(this.storageKey) || [];
//     const index = data.findIndex((x: any) => x.id === id);
//     if (index !== -1) {
//       data[index] = item;
//       this.localStorageService.setItem(this.storageKey, data);
//     }
//     return of(item);
//   }

//   delete(id: string): Observable<void> {
//     const data = this.localStorageService.getItem<T[]>(this.storageKey) || [];
//     const updatedData = data.filter((x: any) => x.id !== id);
//     this.localStorageService.setItem(this.storageKey, updatedData);
//     return of(undefined);
//   }
// }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'list'
  },
  {
    path: 'list', component: ContactsListComponent
  },
  {
    path: 'details/:id', loadComponent: () => import('./contact-view/contact-view.component').then(m => m.ContactViewComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

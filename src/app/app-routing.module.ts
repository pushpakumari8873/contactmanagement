import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { AddComponentComponent } from './component/add-component/add-component.component';

const routes: Routes = [
  {
    path : 'contactList',
    component : ContactListComponent
   
  },
  {
    path :'addcontact',
    component : AddComponentComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

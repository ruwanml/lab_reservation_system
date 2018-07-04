import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { HttpClient } from '@angular/common/http';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ContactService {

  _contactList: Contact[] = [];

  readonly baseURL = 'http://localhost:4000/reservations';

  constructor(private http: Http) { }

  addContact(contact: Contact) {
    /*
    contact.ID = this._contactList.length + 1;
    console.log("contactList: "+contact.ID);
    //this._contactList.push(contact);
    return this.http.post(this.baseURL, contact);
    */

   let headers = new Headers();
   headers.append('Content-Type','application/json');
   return this.http.post('http://localhost:4000/reservations/create', contact,{headers: headers})
     .map(res => res.json());
  }

  editContact(contact: Contact) {
    const index = this._contactList.findIndex(c => c.ID === contact.ID);
    this._contactList[index] = contact;
  }

  deleteContact(id: number) {
    const contact = this._contactList.findIndex(c => c.ID === id);
    this._contactList.splice(contact, 1);
  }

  getAllContacts() {
    return this._contactList;
  }
}

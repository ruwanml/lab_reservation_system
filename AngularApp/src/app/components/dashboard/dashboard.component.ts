import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import {AuthService} from '../../services/auth.service';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventService } from '../../services/event.service';

import { MatDialog } from '@angular/material';
import { ContactService } from '../../services/contact.service';
import { ContactComponent } from '../contact/contact.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isPopupOpened = true;

  calendarOptions: Options;
  displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor( private nav: NavbarService,private authService:AuthService,protected eventService: EventService, private dialog?: MatDialog,
  private _contactService?: ContactService) { }

  ngOnInit() {
    this.nav.show();
    console.log("home "+this.authService.loggedIn());

    this.eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: data
      };
    });
  }

  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }

  get ContactList() {
    return this._contactService.getAllContacts();
  } 

  addContact() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(ContactComponent, {
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    }); 
  }

  
 /*
  addReservation() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(ReservationComponent, {
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }
*/
/*
  get ContactList() {
    return this._reservationService.getAllContacts();
  } 

  editContact(id: number) {
    this.isPopupOpened = true;
    const contact = this._contactService.getAllContacts().find(c => c.ID === id);
    const dialogRef = this.dialog.open(ContactComponent, {
      data: contact
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  deleteContact(id: number) {
    this._contactService.deleteContact(id);
  }

  */

}

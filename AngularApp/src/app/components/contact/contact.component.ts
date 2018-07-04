


import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactService } from '../../services/contact.service';
import { Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { concat } from 'rxjs';
import { Contact } from '../../model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  public _contactForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
  private dialogRef: MatDialogRef<ContactComponent>,
  private _contactService: ContactService,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
   }
 
   ngOnInit() {
     
    this._contactForm = this._formBuilder.group({
      ID: [this.data.ID],
      FirstName: [ this.data.FirstName, [Validators.required]],
      LastName: [ this.data.LastName, [Validators.required]],
      Contact: [ this.data.Contact, [Validators.required]],
      Email: [ this.data.Email , [Validators.required]],
    }); 
  }

  
  

  



/*
  onSubmit() {
    if (isNaN(this.data.ID)) {
      console.log("ID: "+this.data.ID);
      this._contactService.addContact(this._contactForm.value);
      console.log("contact form value: "+this._contactForm.value);
      this.dialogRef.close();
    } else {
      //this._contactService.editContact(this._contactForm.value);
      //this.dialogRef.close();
    }
  } */
  
  onSubmit(){ 
    //console.log(123);
    /*
    const contact = {
      FirstName: this.FirstName,
      LastName: this.LastName,
      Contact: this.Contact,
      Email: this.Email
    }
    this._contactService.addContact(contact).subscribe(data => {}
      */

} 



}
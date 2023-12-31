import { Contact } from './../../../interfaces/Contact';
import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit{

  public listContacts: Contact[];

  constructor(
    private contactService: ContactService
    ) {
      this.listContacts = [];
    }
  ngOnInit() {
    if (this.contactService.listContacts.length > 0) {
      this.listContacts = this.contactService.listContacts
    } else {
      this.contactService.getData('./assets/data/contacts.json').subscribe(list => {
        this.listContacts = list;
      });
    }
    console.log(this.contactService.listContacts)
  }


}

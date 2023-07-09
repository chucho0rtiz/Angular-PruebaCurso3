import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../interfaces/Contact';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public contact: Contact;

  constructor(
    private contactService: ContactService,
    private route: Router
    ) {
    this.contact = {
      'name': '',
      'surname': '',
      'description': '',
      'sex': '',
      'email': '',
      'telephone': '',
      'company': ''
    }
  }
  ngOnInit() {
  }

  addContact() {
    console.log(this.contact);
    this.contactService.addContact(this.contact);
    this.route.navigate(['/list-contact']);
  }

}

import { compilePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit {

  filteredContacts: Contact[] = [];
  _contacts: Contact[] = [];
  _filterBy: string = '';

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.listAllStatusIs(true);
  }


  listAll(): void{
    this.contactService.listAll().subscribe({
      next: contacts => {
        this._contacts = contacts;
        this.filteredContacts = this._contacts;
        //console.log(this._contacts);
      },
      error: err => console.log('Error: Ao carregar API\n' + err),
    });
  }

  listAllStatusIs(status: boolean): void{
    this.contactService.listAllStatusIs(status).subscribe({
      next: contacts => {
        this._contacts = contacts;
        this.filteredContacts = this._contacts;
        //console.log(this._contacts);
      },
      error: err => console.log('Error: Ao carregar API\n' + err),
    });
  }

  /*
  listMock() : void{
    this._contacts = this.contactService.listMock();
    this.filteredContacts = this._contacts;
  }
  */

  set filter(value: string) {
    this._filterBy = value;
    this.filteredContacts = this._contacts.filter((course: Contact) => course.nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }
}

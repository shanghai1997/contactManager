import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contact } from "../Entity";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit, OnDestroy {
  contactList: Contact[] = [{id: 33, name: 'Sears', number: 7097692008, date: new Date()},
    {id: 99, name: 'Matt', number: 7097692008, date: new Date('1991-12-17')},
    {id: 88, name: 'Brett', number: 7097692008, date: new Date('1998-12-17')},
    {id: 8989, name: 'Sanyu', number: 7097692008, date: new Date('1999-12-17')}];

  constructor(
  ) {
  }

  ngOnInit() {
  }

  onDeleteContact(id: number) {
    this.contactList = this.contactList.filter(contact => contact.id !== id)
  }

  addLine() {
    this.contactList.push({id: Math.random()*100 + Math.random()*100, number: null, name: null, date: new Date()})
  }

  ngOnDestroy() {
  }
}

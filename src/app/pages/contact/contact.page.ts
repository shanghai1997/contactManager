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

  displayedList = [...this.contactList];

  filterContent: string;

  constructor(
  ) {
  }

  ngOnInit() {
  }

  onDeleteContact(id: number) {
    this.contactList = this.contactList.filter(contact => contact.id !== id)
    this.displayedList = this.contactList.filter(c => c.name && c.name.includes(this.filterContent))
  }

  updateDisplayedList(event) {
    this.displayedList = this.contactList.filter(c => c.name && c.name.includes(event.target!.value))
  }

  sortDisplayedList(type: number) {
    this.displayedList = type ?
      this.displayedList.sort((a,b) => a.date.valueOf() - b.date.valueOf())
      : this.displayedList.sort((a,b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
  }

  addLine() {
    this.contactList.push({id: Math.random()*100 + Math.random()*100, number: 0, name: 'sample', date: new Date()})
    this.displayedList = this.contactList.filter(c => c.name && c.name.includes(this.filterContent))
  }

  ngOnDestroy() {
  }
}

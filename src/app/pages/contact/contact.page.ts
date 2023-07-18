import { Component, OnDestroy, OnInit } from '@angular/core';
import {Contact} from "../Entity";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit, OnDestroy {
  contactList: Contact[] = [{name: 'Sears', number: 7097692008, date: new Date()},
    {name: 'Matt', number: 7097692008, date: new Date()},
    {name: 'Brett', number: 7097692008, date: new Date()}];

  constructor(
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}

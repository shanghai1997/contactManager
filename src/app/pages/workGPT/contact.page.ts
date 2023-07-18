import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, interval, map, mergeMap, timer} from "rxjs";
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

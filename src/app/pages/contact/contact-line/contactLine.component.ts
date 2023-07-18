import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, interval, map, mergeMap, Observable, timer} from "rxjs";
import { Contact } from "../../Entity";

@Component({
  selector: 'app-contact-line',
  templateUrl: './contactLine.component.html',
  styleUrls: ['./contactLine.component.scss']
})
export class ContactLineComponent implements OnInit, OnDestroy {
  @Input() contact: Contact;
  editable: boolean = false;
  constructor(
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}

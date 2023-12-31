import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Contact } from "../../Entity";
import { AlertController } from "@ionic/angular";
import { MaskitoElementPredicateAsync, MaskitoOptions } from "@maskito/core";

@Component({
  selector: 'app-contact-line',
  templateUrl: './contactLine.component.html',
  styleUrls: ['./contactLine.component.scss']
})
export class ContactLineComponent implements OnInit, OnDestroy {
  @Input() contact: Contact;
  @Output() deleteEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() updateEmitter: EventEmitter<Contact> = new EventEmitter<Contact>();
  editable: boolean = false;
  readonly phoneMask: MaskitoOptions = {
    mask: ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement()
  constructor( private alertController: AlertController
  ) {
  }

  ngOnInit() {
  }

  async conFirmDelete(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'Are you sure to delete this contact?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.deleteEmitter.emit(this.contact.id)
          },
        },
      ]
    });

    await alert.present();
  }

  updateContact() {
    this.editable = false;
  }

  ngOnDestroy() {
  }
}

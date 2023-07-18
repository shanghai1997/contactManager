import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Contact } from "../../Entity";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-contact-line',
  templateUrl: './contactLine.component.html',
  styleUrls: ['./contactLine.component.scss']
})
export class ContactLineComponent implements OnInit, OnDestroy {
  @Input() contact: Contact;
  editable: boolean = false;
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
      buttons: ['OK'],
    });

    await alert.present();
}

  ngOnDestroy() {
  }
}

import { ContactRoutingModule } from "./contact-routing.moudle";
import { IonicModule } from "@ionic/angular";
import { ContactPage } from "./contact.page";
import { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
import { ContactLineComponent } from "./contact-line/contactLine.component";
import {FormsModule} from "@angular/forms";
import {MaskitoModule} from "@maskito/angular";

@NgModule({
  declarations: [
    ContactPage,
    ContactLineComponent
  ],
  imports: [
    IonicModule,
    ContactRoutingModule,
    CommonModule,
    FormsModule,
    MaskitoModule,
  ]
})
export class ContactModule { }

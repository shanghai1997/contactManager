import { WorkGPTRoutingModule } from "./contact-routing.moudle";
import { IonicModule } from "@ionic/angular";
import { ContactPage } from "./contact.page";
import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {ChatBlockComponent} from "./chat-block/chatBlock.component";

@NgModule({
  declarations: [
    ContactPage,
    ChatBlockComponent
  ],
  imports: [
    IonicModule,
    WorkGPTRoutingModule,
    CommonModule,
  ]
})
export class ContactModule { }

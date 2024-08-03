import { IonicModule } from "@ionic/angular";
import { HomePage } from "./home.page";
import { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MaskitoModule} from "@maskito/angular";

@NgModule({
  declarations: [
    HomePage,
  ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        MaskitoModule,
    ]
})
export class HomeModule { }

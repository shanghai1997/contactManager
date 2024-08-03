import { IonicModule } from "@ionic/angular";
import { HomePage } from "./home.page";
import { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MaskitoModule} from "@maskito/angular";
import {HomeRoutingModule} from "./home-routing.moudle";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicModule,
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    MaskitoModule,
    HttpClientModule
  ]
})
export class HomeModule { }

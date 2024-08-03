import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {IonInput} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('image_container', {read: ViewContainerRef}) image_container: ViewContainerRef;
  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;
  cmpRef: ComponentRef<any>
  inputModel = '';

  constructor( private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  ngAfterViewInit(): void {
  }

  onInput(ev) {
    const value = ev.target!.value;

    // Removes non alphanumeric characters
    const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');

    /**
     * Update both the state variable and
     * the component to keep them in sync.
     */
    this.ionInputEl.value = this.inputModel = filteredValue;
  }
}

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
import { Contact } from "../Entity";

@Component({
  selector: 'app-contact',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('image_container', {read: ViewContainerRef}) image_container: ViewContainerRef;
  cmpRef: ComponentRef<any>

  constructor( private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  ngAfterViewInit(): void {
  }
}

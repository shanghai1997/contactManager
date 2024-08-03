import {
  AfterViewInit,
  Component,
  ComponentRef, ElementRef,
  OnDestroy,
  OnInit, Renderer2,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {IonInput} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('image_container', {read: ViewContainerRef}) image_container: ViewContainerRef;
  @ViewChild('ionInputEl', {static: true}) ionInputEl!: IonInput;
  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
  cmpRef: ComponentRef<any>
  inputModel = '';
  imageLoaded = false
  imageSrc: string | ArrayBuffer | null = null;
  constructor(private renderer: Renderer2,
              private http: HttpClient
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

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('Selected file:', file);

      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  openFilePicker() {
    this.renderer.selectRootElement(this.fileInput.nativeElement).click();
  }

}

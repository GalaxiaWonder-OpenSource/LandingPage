import { Component } from '@angular/core';
import {PlanItemComponent} from "../plan-item/plan-item.component";
import {TranslatePipe} from "@ngx-translate/core";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-about-the-product',
  imports: [
    TranslatePipe
  ],
  templateUrl: './about-the-product.component.html',
  styleUrl: './about-the-product.component.css'
})
export class AboutTheProductComponent {
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/A0TU4xBPwRY');
  }
}

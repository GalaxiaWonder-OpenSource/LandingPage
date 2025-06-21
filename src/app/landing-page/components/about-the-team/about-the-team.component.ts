import { Component } from '@angular/core';
import {  TranslatePipe } from '@ngx-translate/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-about-the-team',
  imports: [
    TranslatePipe
  ],
  templateUrl: './about-the-team.component.html',
  styleUrl: './about-the-team.component.css'
})
export class AboutTheTeamComponent {
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/yz81Fjm4GxY');
  }
}

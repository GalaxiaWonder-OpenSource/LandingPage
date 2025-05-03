import {Component} from '@angular/core';
import {TranslateService, TranslatePipe} from '@ngx-translate/core';

import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import {ToolbarContentComponent} from './public/components/header-content/toolbar-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslatePipe,
    ToolbarContentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LandingPage';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}

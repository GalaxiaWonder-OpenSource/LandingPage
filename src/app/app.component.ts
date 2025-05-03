import {Component, inject} from '@angular/core';
import {TranslateService, TranslatePipe} from '@ngx-translate/core';

import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {ToolbarContentComponent} from './landing-page/components/toolbar-content/toolbar-content.component';
import {UserSwitcherComponent} from './public/components/user-switcher/user-switcher.component';

import {UserTypeService} from './public/services/user-type.service';
import {UserType} from './users/model/user-type.enum';
import {CallToActionComponent} from './landing-page/components/call-to-action/call-to-action.component';
import {HeroSectionComponent} from './landing-page/components/hero-section/hero-section.component';
import {OverviewComponent} from './landing-page/components/overview/overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslatePipe,
    ToolbarContentComponent,
    UserSwitcherComponent,
    CallToActionComponent,
    HeroSectionComponent,
    OverviewComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LandingPage';
  userType : UserType = UserType.CONTRACTOR;
  private userTypeService = inject(UserTypeService);
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.userTypeService.userType$.subscribe(type => {
      console.log('User type changed (from AppComponent):', type);
      this.userType = type;
    });
  }
}

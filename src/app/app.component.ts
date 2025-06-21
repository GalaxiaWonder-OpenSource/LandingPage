import {Component, inject} from '@angular/core';
import {TranslateService, TranslatePipe} from '@ngx-translate/core';

import {ToolbarContentComponent} from './landing-page/components/toolbar-content/toolbar-content.component';
import {UserTypeService} from './public/services/user-type.service';
import {UserType} from './users/model/user-type.enum';
import {HeroSectionComponent} from './landing-page/components/hero-section/hero-section.component';
import {AboutUsComponent} from './landing-page/components/about-us/about-us.component';
import {PlansComponent} from './landing-page/components/plans/plans.component';
import {AboutTheProductComponent} from './landing-page/components/about-the-product/about-the-product.component';
import {OverviewComponent} from './landing-page/components/overview/overview.component';
import {TestimonialsComponent} from './landing-page/components/testimonials/testimonials.component';
import {FooterContentComponent} from './landing-page/components/footer-content/footer-content.component';
import {AboutTheTeamComponent} from './landing-page/components/about-the-team/about-the-team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslatePipe,
    ToolbarContentComponent,
    HeroSectionComponent,
    AboutUsComponent,
    PlansComponent,
    AboutTheProductComponent,
    OverviewComponent,
    FooterContentComponent,
    TestimonialsComponent,
    AboutTheTeamComponent
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

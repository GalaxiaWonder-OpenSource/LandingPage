import {Component, Input} from '@angular/core';
import {UserType} from '../../../users/model/user-type.enum';
import {CallToActionComponent} from '../call-to-action/call-to-action.component';
import {UserSwitcherComponent} from '../../../public/components/user-switcher/user-switcher.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  imports: [
    CallToActionComponent,
    UserSwitcherComponent,
    TranslatePipe
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  @Input() userType!: UserType;
  protected readonly UserType = UserType;
}

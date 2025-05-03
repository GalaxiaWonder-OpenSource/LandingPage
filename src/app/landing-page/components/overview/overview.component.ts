import {Component, Input} from '@angular/core';
import {UserSwitcherComponent} from '../../../public/components/user-switcher/user-switcher.component';
import {MatIcon} from '@angular/material/icon';
import {UserType} from '../../../users/model/user-type.enum';
import {MatSlider} from '@angular/material/slider';
import {TranslatePipe} from '@ngx-translate/core';
import {OverviewCarouselComponent} from '../overview-carousel/overview-carousel.component';

@Component({
  selector: 'app-overview',
  imports: [
    UserSwitcherComponent,
    MatIcon,
    MatSlider,
    TranslatePipe,
    OverviewCarouselComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  @Input() userType!: UserType;
  protected readonly UserType = UserType;
}

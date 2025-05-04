import {Component, Input} from '@angular/core';
import {UserSwitcherComponent} from '../../../public/components/user-switcher/user-switcher.component';
import {UserType} from '../../../users/model/user-type.enum';
import {TranslatePipe} from '@ngx-translate/core';
import {OverviewCarouselComponent} from '../overview-carousel/overview-carousel.component';
import {OverviewListComponent} from '../overview-list/overview-list.component';

@Component({
  selector: 'app-overview',
  imports: [
    UserSwitcherComponent,
    TranslatePipe,
    OverviewCarouselComponent,
    OverviewListComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  @Input() userType!: UserType;
  protected readonly UserType = UserType;
}

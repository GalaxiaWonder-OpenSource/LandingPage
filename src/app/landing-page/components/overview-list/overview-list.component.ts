import {Component, Input} from '@angular/core';
import { UserType } from '../../../users/model/user-type.enum';
import {MatCardModule} from '@angular/material/card';
import {getCardsByUserType, OverviewCard} from '../../model/overview-card';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {TranslatePipe} from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-overview-list',
  imports: [
    MatGridList,
    MatGridTile,
    TranslatePipe,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './overview-list.component.html',
  styleUrl: './overview-list.component.css'
})
export class OverviewListComponent {
  private _userType!: UserType;
  cards: OverviewCard[] = [];

  @Input()
  set userType(value: UserType) {
    this._userType = value;
    this.cards = getCardsByUserType(value);
  }
}

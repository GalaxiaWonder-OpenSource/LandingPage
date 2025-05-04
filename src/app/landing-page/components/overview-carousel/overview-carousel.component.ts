import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { UserType } from '../../../users/model/user-type.enum';
import { OverviewCard } from '../../model/overview-card';
import {getCardsByUserType} from '../../model/overview-card';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-overview-carousel',
  standalone: true,
  templateUrl: './overview-carousel.component.html',
  styleUrls: ['./overview-carousel.component.css'],
  imports: [NgIf, MatIconModule, MatButtonModule, TranslatePipe, MatCardModule],
})
export class OverviewCarouselComponent {
  private _userType!: UserType;
  cards: OverviewCard[] = [];
  index = 0;

  @Input()
  set userType(value: UserType) {
    this._userType = value;
    this.index = 0;
    this.cards = getCardsByUserType(value);
  }

  get userType(): UserType {
    return this._userType;
  }

  get currentCard(): OverviewCard | null {
    return this.cards[this.index] ?? null;
  }

  prevCard() {
    if (this.index > 0) this.index--;
  }

  nextCard() {
    if (this.index < this.cards.length - 1) this.index++;
  }
}

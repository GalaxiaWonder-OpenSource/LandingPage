import {Component, Input} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import {UserType} from '../../../users/model/user-type.enum';

@Component({
  selector: 'app-overview-carousel',
  standalone: true,
  templateUrl: './overview-carousel.component.html',
  styleUrls: ['./overview-carousel.component.css'],
  imports: [NgIf, MatIconModule, MatButtonModule, TranslatePipe],
})
export class OverviewCarouselComponent {
  @Input() userType!: UserType;
  index = 0;

  cards = [
    {
      icon: 'workspaces',
      title: 'overviews.contractor.features.project-management.title',
      content: 'overviews.contractor.features.project-management.content'
    },
    {
      icon: 'change_circle',
      title: 'overviews.contractor.features.change-management.title',
      content: 'overviews.contractor.features.change-management.content'
    },
    {
      icon: 'calendar_today',
      title: 'overviews.contractor.features.schedule.title',
      content: 'overviews.contractor.features.schedule.content'
    },
    {
      icon: 'cloud',
      title: 'overviews.contractor.features.cloud-storage.title',
      content: 'overviews.contractor.features.cloud-storage.content'
    }
  ];

  get currentCard() {
    return this.cards[this.index];
  }

  prevCard() {
    if (this.index > 0) this.index--;
  }

  nextCard() {
    if (this.index < this.cards.length - 1) this.index++;
  }
}

import { Component } from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIconButton} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {OverviewCard} from '../../model/overview-card';
import {getTestimonials, TestimonialCard} from '../../model/testimonial-card';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-testimonial-carousel',
  imports: [
    MatCard,
    MatCardContent,
    MatIconButton,
    NgIf,
    TranslatePipe,
    MatIcon
  ],
  templateUrl: './testimonial-carousel.component.html',
  styleUrl: './testimonial-carousel.component.css'
})
export class TestimonialCarouselComponent {
  index = 0;
  cards: TestimonialCard[] = getTestimonials();

  get currentCard(): TestimonialCard {
    return this.cards[this.index] ?? null;
  }

  prevCard() {
    if (this.index > 0) this.index--;
  }

  nextCard() {
    if (this.index < this.cards.length - 1) this.index++;
  }
}

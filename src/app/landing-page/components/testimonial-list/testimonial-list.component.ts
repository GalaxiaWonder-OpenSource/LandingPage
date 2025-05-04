import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {OverviewCard} from '../../model/overview-card';
import {getTestimonials, TestimonialCard} from '../../model/testimonial-card';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-testimonial-list',
  imports: [
    MatGridList,
    TranslatePipe,
    MatGridTile
  ],
  templateUrl: './testimonial-list.component.html',
  styleUrl: './testimonial-list.component.css'
})
export class TestimonialListComponent {
  cards: TestimonialCard[] = getTestimonials();
}

import { Component } from '@angular/core';
import {OverviewCarouselComponent} from "../overview-carousel/overview-carousel.component";
import {OverviewListComponent} from "../overview-list/overview-list.component";
import {TranslatePipe} from "@ngx-translate/core";
import {UserSwitcherComponent} from "../../../public/components/user-switcher/user-switcher.component";
import {TestimonialListComponent} from '../testimonial-list/testimonial-list.component';

@Component({
  selector: 'app-testimonials',
  imports: [
    OverviewCarouselComponent,
    OverviewListComponent,
    TranslatePipe,
    UserSwitcherComponent,
    TestimonialListComponent
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

}

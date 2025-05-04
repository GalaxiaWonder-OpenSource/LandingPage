import { Component } from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {PlanItemComponent} from '../plan-item/plan-item.component';
import {FormsModule} from '@angular/forms';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    PlanItemComponent,
    FormsModule,
    TranslatePipe
  ],
  styleUrls: ['./plans.component.css']
})
export class PlansComponent {
  selectedPlan: 'independent' | 'business' = 'independent';
}

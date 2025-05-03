import {Component, Input} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-plan-item',
  imports: [
    MatButton,
    TranslatePipe
  ],
  templateUrl: './plan-item.component.html',
  styleUrl: './plan-item.component.css'
})
export class PlanItemComponent {
  @Input() type: 'independent' | 'business' = 'independent';
}

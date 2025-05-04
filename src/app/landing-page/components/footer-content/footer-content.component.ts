import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {TranslatePipe} from '@ngx-translate/core';
import {TermsAndConditionsComponent} from '../terms-and-conditions/terms-and-conditions.component';

@Component({
  selector: 'app-footer-content',
  imports: [
    MatGridList,
    MatGridTile,
    MatIconModule,
    TranslatePipe,
    TermsAndConditionsComponent
  ],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.css'
})
export class FooterContentComponent {

}

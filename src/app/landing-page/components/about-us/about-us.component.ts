import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  imports: [MatGridListModule, TranslatePipe],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}

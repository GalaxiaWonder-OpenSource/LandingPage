import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {TranslatePipe} from '@ngx-translate/core';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  imports: [
    TranslatePipe,
    MatGridList,
    MatGridTile
  ],
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  missionRowHeight = '2:1';
  valuesRowHeight = '2:1';

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
    ]).subscribe(result => {
      if (result.matches) {
        // Ajustar altura en móvil para evitar ruptura visual
        this.missionRowHeight = '2:2.5';
        this.valuesRowHeight = '2:2.8';
      } else {
        // Mantener altura estándar en escritorio
        this.missionRowHeight = '2:1';
        this.valuesRowHeight = '2:1';
      }
    });
  }
}

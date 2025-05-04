import { Component } from '@angular/core';
import {PlanItemComponent} from "../plan-item/plan-item.component";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-about-the-product',
    imports: [
        TranslatePipe
    ],
  templateUrl: './about-the-product.component.html',
  styleUrl: './about-the-product.component.css'
})
export class AboutTheProductComponent {

}

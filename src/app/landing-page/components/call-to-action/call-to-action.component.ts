import {Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import { UserType } from '../../../users/model/user-type.enum';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-call-to-action',
  imports: [
    TranslatePipe,
    MatButton
  ],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.css'
})
export class CallToActionComponent {
  @Input() userType!: UserType;
  actionUrl: string = "http://20.84.51.92:4200/login";
  UserType = UserType;

}

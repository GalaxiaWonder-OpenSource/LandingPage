import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { UserTypeService } from '../../services/user-type.service';
import {FormsModule} from '@angular/forms';
import {TranslatePipe} from "@ngx-translate/core";
import {UserType} from '../../../users/model/user-type.enum';

@Component({
  selector: 'app-user-switcher',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, FormsModule, TranslatePipe],
  templateUrl: './user-switcher.component.html',
  styleUrls: ['./user-switcher.component.css']
})
export class UserSwitcherComponent {
  UserType = UserType;
  currentType: UserType;

  constructor(private userType: UserTypeService) {
    // Default to 'contractor'
    this.currentType = this.userType.currentUserType || UserType.CONTRACTOR;
    this.userType.userType$.subscribe(type => {
      this.currentType = type;
    });
  }

  onSelectionChange(value: UserType) {
    this.userType.setUserType(value);
  }
}

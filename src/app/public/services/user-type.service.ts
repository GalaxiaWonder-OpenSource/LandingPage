import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserType} from '../../users/model/user-type.enum';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private userTypeSubject = new BehaviorSubject<UserType>(UserType.CONTRACTOR);
  userType$ = this.userTypeSubject.asObservable();

  setUserType(type: UserType) {
    this.userTypeSubject.next(type);
  }

  get currentUserType(): UserType {
    return this.userTypeSubject.value;
  }
}


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSwitcherComponent } from './user-switcher.component';

describe('UserSwitcherComponent', () => {
  let component: UserSwitcherComponent;
  let fixture: ComponentFixture<UserSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSwitcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

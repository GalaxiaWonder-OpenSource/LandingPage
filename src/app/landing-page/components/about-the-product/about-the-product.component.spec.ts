import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheProductComponent } from './about-the-product.component';

describe('AboutTheProductComponent', () => {
  let component: AboutTheProductComponent;
  let fixture: ComponentFixture<AboutTheProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTheProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTheProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

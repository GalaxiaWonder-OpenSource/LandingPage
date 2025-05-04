import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCarouselComponent } from './overview-carousel.component';

describe('OverviewCarouselComponent', () => {
  let component: OverviewCarouselComponent;
  let fixture: ComponentFixture<OverviewCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdUsageCardComponent } from './pcd-usage-card.component';

describe('PcdUsageCardComponent', () => {
  let component: PcdUsageCardComponent;
  let fixture: ComponentFixture<PcdUsageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcdUsageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdUsageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

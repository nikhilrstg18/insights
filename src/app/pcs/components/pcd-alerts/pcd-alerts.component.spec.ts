import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdAlertsComponent } from './pcd-alerts.component';

describe('PcdAlertsComponent', () => {
  let component: PcdAlertsComponent;
  let fixture: ComponentFixture<PcdAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcdAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

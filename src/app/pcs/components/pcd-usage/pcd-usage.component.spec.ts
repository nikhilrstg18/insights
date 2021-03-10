import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdUsageComponent } from './pcd-usage.component';

describe('PcdUsageComponent', () => {
  let component: PcdUsageComponent;
  let fixture: ComponentFixture<PcdUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcdUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

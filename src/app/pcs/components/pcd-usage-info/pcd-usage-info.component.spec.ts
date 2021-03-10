import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdUsageInfoComponent } from './pcd-usage-info.component';

describe('PcdUsageInfoComponent', () => {
  let component: PcdUsageInfoComponent;
  let fixture: ComponentFixture<PcdUsageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcdUsageInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdUsageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

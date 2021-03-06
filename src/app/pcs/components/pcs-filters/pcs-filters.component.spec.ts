import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcsFiltersComponent } from './pcs-filters.component';

describe('PcsFiltersComponent', () => {
  let component: PcsFiltersComponent;
  let fixture: ComponentFixture<PcsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcsFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

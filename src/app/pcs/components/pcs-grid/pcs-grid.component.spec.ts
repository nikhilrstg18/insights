import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcsGridComponent } from './pcs-grid.component';

describe('PcsGridComponent', () => {
  let component: PcsGridComponent;
  let fixture: ComponentFixture<PcsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

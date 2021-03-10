import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdInfoComponent } from './pcd-info.component';

describe('PcdInfoComponent', () => {
  let component: PcdInfoComponent;
  let fixture: ComponentFixture<PcdInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcdInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

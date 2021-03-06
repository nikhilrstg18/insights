import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBCardComponent } from './dbcard.component';

describe('DBCardComponent', () => {
  let component: DBCardComponent;
  let fixture: ComponentFixture<DBCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DBCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

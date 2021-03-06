import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBWidgetComponent } from './dbwidget.component';

describe('DBWidgetComponent', () => {
  let component: DBWidgetComponent;
  let fixture: ComponentFixture<DBWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DBWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

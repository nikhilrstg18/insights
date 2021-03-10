import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdAppsComponent } from './pcd-apps.component';

describe('PcdAppsComponent', () => {
  let component: PcdAppsComponent;
  let fixture: ComponentFixture<PcdAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcdAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

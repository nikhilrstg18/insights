import { TestBed } from '@angular/core/testing';

import { InMemDBService } from './in-mem-db.service';

describe('InMemoryDBService', () => {
  let service: InMemDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PcsService } from './pcs.service';

describe('PcsService', () => {
  let service: PcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GoogleScholarService } from './google-scholar.service';

describe('GoogleScholarService', () => {
  let service: GoogleScholarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleScholarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

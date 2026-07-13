import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GoogleScholarService } from './google-scholar.service';

describe('GoogleScholarService', () => {
  let service: GoogleScholarService;
  beforeEach(() => { TestBed.configureTestingModule({ imports: [HttpClientTestingModule] }); service = TestBed.inject(GoogleScholarService); });
  it('should be created', () => { expect(service).toBeTruthy(); });
});

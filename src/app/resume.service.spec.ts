import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResumeService } from './resume.service';

describe('ResumeService', () => {
  let service: ResumeService;
  beforeEach(() => { TestBed.configureTestingModule({ imports: [HttpClientTestingModule] }); service = TestBed.inject(ResumeService); });
  it('should be created', () => { expect(service).toBeTruthy(); });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GoogleScholarComponent } from './google-scholar.component';

describe('GoogleScholarComponent', () => {
  let component: GoogleScholarComponent;
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [HttpClientTestingModule], declarations: [GoogleScholarComponent] }).compileComponents(); component = TestBed.createComponent(GoogleScholarComponent).componentInstance; });
  it('should create', () => { expect(component).toBeTruthy(); });
});

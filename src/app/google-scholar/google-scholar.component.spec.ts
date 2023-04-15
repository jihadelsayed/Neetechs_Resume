import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleScholarComponent } from './google-scholar.component';

describe('GoogleScholarComponent', () => {
  let component: GoogleScholarComponent;
  let fixture: ComponentFixture<GoogleScholarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleScholarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleScholarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

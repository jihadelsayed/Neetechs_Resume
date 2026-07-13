import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ResumeService } from './resume.service';

class ResumeServiceStub { getResume() { return { pipe: () => ({ subscribe: () => undefined }) }; } }

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HttpClientTestingModule, RouterTestingModule], declarations: [AppComponent], providers: [{ provide: ResumeService, useClass: ResumeServiceStub }] }).compileComponents();
  });
  it('should create', () => { expect(TestBed.createComponent(AppComponent).componentInstance).toBeTruthy(); });
  it('uses the Neetechs application title', () => { expect(TestBed.createComponent(AppComponent).componentInstance.title).toBe('neetechs'); });
});

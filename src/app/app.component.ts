import { Component, OnInit } from '@angular/core';
import { catchError, finalize, of } from 'rxjs';
import { ResumeService } from './resume.service';

@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss'] })
export class AppComponent implements OnInit {
  title = 'neetechs';
  resume: any;
  isLoading = true;
  loadError = false;

  constructor(private readonly resumeService: ResumeService) {}

  ngOnInit(): void { this.loadResume(); }

  loadResume(): void {
    this.isLoading = true;
    this.loadError = false;
    this.resumeService.getResume().pipe(
      catchError(() => { this.loadError = true; return of(null); }),
      finalize(() => this.isLoading = false)
    ).subscribe((data) => this.resume = data);
  }
}

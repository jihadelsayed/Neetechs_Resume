import { Component, Input, OnInit } from '@angular/core';
import { catchError, finalize, of } from 'rxjs';
import { GoogleScholarService } from './google-scholar.service';

@Component({ selector: 'app-google-scholar', templateUrl: './google-scholar.component.html', styleUrls: ['./google-scholar.component.scss'] })
export class GoogleScholarComponent implements OnInit {
  @Input() resume: any;
  articles: any[] = [];
  isLoading = true;
  loadError = false;
  constructor(private readonly googleScholarService: GoogleScholarService) {}
  ngOnInit(): void { this.loadArticles(); }
  loadArticles(): void { this.isLoading = true; this.loadError = false; this.googleScholarService.getArticles().pipe(catchError(() => { this.loadError = true; return of({ articles: [] }); }), finalize(() => this.isLoading = false)).subscribe((data) => this.articles = data.articles || []); }
}

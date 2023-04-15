import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GoogleScholarService } from './google-scholar.service';


@Component({
  selector: 'app-google-scholar',
  templateUrl: './google-scholar.component.html',
  styleUrls: ['./google-scholar.component.scss']
})
export class GoogleScholarComponent {

  @Input() resume: any;
  // SafeArticlesFrame: SafeResourceUrl;
  articles: any

  constructor(private sanitizer: DomSanitizer, private httpClient: HttpClient,
    public googleScholarService: GoogleScholarService,
    ) {
    // this.SafeArticlesFrame= this.sanitizer.bypassSecurityTrustResourceUrl(
    //   //'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=' + encodeURIComponent('retta el sayed') + '&btnG='
    //   'https://serpapi.com/search.html?engine=google_scholar_author&author_id=yccp85oAAAAJ&hl=en&api_key=500b8aae7039034b19cd1f07a7c56bdd32fff7ac2fcdbb7d03deff7c6117c414'
    //   );
  }
  ngOnInit(): void {
    this.googleScholarService.getArticles().subscribe(
      (data: any) => {
        console.log(data)
        this.articles = data.articles
      })
  }
}

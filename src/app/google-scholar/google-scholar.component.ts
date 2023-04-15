import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-google-scholar',
  templateUrl: './google-scholar.component.html',
  styleUrls: ['./google-scholar.component.scss']
})
export class GoogleScholarComponent {

  @Input() resume: any;
  SafeArticlesFrame: SafeResourceUrl;
  articles: any

  constructor(private sanitizer: DomSanitizer, private httpClient: HttpClient) {
    this.SafeArticlesFrame= this.sanitizer.bypassSecurityTrustResourceUrl(
      //'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=' + encodeURIComponent('retta el sayed') + '&btnG='
      'https://serpapi.com/search.html?engine=google_scholar_author&author_id=yccp85oAAAAJ&hl=en&api_key=500b8aae7039034b19cd1f07a7c56bdd32fff7ac2fcdbb7d03deff7c6117c414'
      );
      this.searchScholar('retta el sayed')
      // Add the iframe src URL to the src whitelist
      // this.sanitizer.bypassSecurityTrustResourceUrl('https://scholar.google.com/citations?user=yccp85oAAAAJ&hl=en');
      // Example: encode search query string
  }

  searchScholar(name: string) {
    const encodedName = encodeURIComponent(name);
    const url = `https://scholar.google.com/scholar?q=${encodedName}&output=cite&scirp=0&hl=en`;

    return this.httpClient.get(url, { responseType: 'text' }).pipe(
      map((response: string) => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(response, 'text/html');
        const links = Array.from(htmlDoc.querySelectorAll('a'));
        const articles = links.filter(link => link.getAttribute('href')?.startsWith('/scholar?')).map(link => ({
          title: link.querySelector('h3')?.textContent,
          link: `https://scholar.google.com${link.getAttribute('href')}`,
          authors: link.querySelector('.gs_a')?.textContent,
          source: link.querySelector('.gs_citi')?.textContent
        }));
        console.log(articles)
        return articles;
      })
    );
  }
}

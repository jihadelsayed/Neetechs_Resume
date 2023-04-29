import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Domain,domains } from 'src/environments/domains';

@Injectable({
  providedIn: 'root'
})
export class GoogleScholarService {

  private baseUrl = 'https://scholar.google.com/scholar';
  private apiKey = '564520059886-egim0f6iu8vpgdkvlt9ude58np5h209l.apps.googleusercontent.com';

  domains: Domain[] = domains;

  constructor(@Inject(LOCALE_ID) public localeId: string, private httpClient: HttpClient) { }
  currentLang = this.localeId || 'en'; // or 'ar'
  checkName(hostname: string): string | undefined {
    const matchedDomain = this.domains.find(domain => domain.hostname === hostname);
    return matchedDomain ? matchedDomain.name : 'retta';
  }

  getArticles() {
    const domain = this.checkName(window.location.hostname)
    return this.httpClient.get('https://raw.githubusercontent.com/jihadelsayed/Neetechs_Resume/main/json/'+domain+'/'+'google_scholar_author.json');
  }

}

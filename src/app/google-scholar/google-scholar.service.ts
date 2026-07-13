import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Domain, domains } from 'src/environments/domains';

@Injectable({ providedIn: 'root' })
export class GoogleScholarService {
  domains: Domain[] = domains;
  constructor(@Inject(LOCALE_ID) public localeId: string, private readonly httpClient: HttpClient) {}
  checkName(hostname: string): string { return this.domains.find((domain) => domain.hostname === hostname)?.name || 'retta'; }
  getArticles() { const domain = this.checkName(window.location.hostname); return this.httpClient.get<any>('https://raw.githubusercontent.com/jihadelsayed/Neetechs_Resume/main/json/' + domain + '/google_scholar_author.json'); }
}

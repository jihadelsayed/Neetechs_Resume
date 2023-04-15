import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Domain, domains } from 'src/environments/domains';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  domains: Domain[] = domains;

  constructor(@Inject(LOCALE_ID) public localeId: string, private httpClient: HttpClient) { }
  currentLang = this.localeId || 'en'; // or 'ar'
  checkName(hostname: string): string | undefined {
    const matchedDomain = this.domains.find(domain => domain.hostname === hostname);
    return matchedDomain ? matchedDomain.name : 'retta';
  }
  getResume() {
    const domain = this.checkName(window.location.hostname)
    //return this.httpClient.get('./assets/Names_Of_names_EN.json');
    //window.location.pathname.split("/")[1]
    return this.httpClient.get('https://raw.githubusercontent.com/davidpales1/Neetechs_Resume/main/json/'+domain+'/'+domain+'.json');
  }
}

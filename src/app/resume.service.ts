import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(@Inject(LOCALE_ID) public localeId: string, private httpClient: HttpClient) { }
  currentLang = this.localeId || 'en'; // or 'ar'

  getResume() {
    const domain = "rita"
    //return this.httpClient.get('./assets/Names_Of_names_EN.json');
    //window.location.pathname.split("/")[1]
    return this.httpClient.get('https://raw.githubusercontent.com/davidpales1/Neetechs_Resume/main/json/'+domain+'/'+domain+'.'+this.currentLang+'.json');
  }}

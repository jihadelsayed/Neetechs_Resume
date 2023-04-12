import { filter } from 'rxjs/operators';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ResumeService } from './resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'neetechs';

  currentRoute:any
  currentLang = this.localeId || 'en'; // or 'ar'
  resume: any;

  constructor(@Inject(LOCALE_ID) public localeId: string,
  public resumeService: ResumeService,
  private router: Router)
  {
    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
      ).subscribe(
          event =>
           {
            //this.router.url.split('/')[1]
              this.currentRoute = event.url.split('/')[2];
              console.log(event);
           });
  }

  section = window.location.hash.split("/")[1]
  ngOnInit(): void {
    this.resumeService.getResume().subscribe(
      (data: any) => {
        console.log(data)
        this.resume = data
      })
  }
}

import { Component, Input } from '@angular/core';
import { GoogleScholarService } from './google-scholar.service';

@Component({
  selector: 'app-google-scholar',
  templateUrl: './google-scholar.component.html',
  styleUrls: ['./google-scholar.component.scss']
})
export class GoogleScholarComponent {
  @Input() resume: any;

  // articles: any[] = [];

  // constructor(private googleScholarService: GoogleScholarService) {}

  // search(): void {
  //   this.googleScholarService.getGoogleScholarPosts(this.resume.about.name).subscribe(data => {
  //     this.articles = data.items;
  //   });
  // }
}

import { Component, Input } from '@angular/core';

@Component({ selector: 'app-header', templateUrl: './header.component.html', styleUrls: ['./header.component.scss'] })
export class HeaderComponent {
  @Input() resume: any;
  mobileNavigationOpen = false;

  get socialLinks(): Array<{ label: string; url: string }> {
    const home = this.resume && this.resume.home;
    if (!home) { return []; }
    return [
      { label: 'Facebook', url: home.facebook }, { label: 'Twitter', url: home.twitter },
      { label: 'LinkedIn', url: home.linkedin }, { label: 'Instagram', url: home.instagram },
      { label: 'Website', url: home.website }
    ].filter((link) => link.url && /^https?:\/\//.test(link.url));
  }

  closeNavigation(): void { this.mobileNavigationOpen = false; }
}

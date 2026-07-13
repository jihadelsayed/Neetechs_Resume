import { Component, Input } from '@angular/core';

@Component({ selector: 'app-footer', templateUrl: './footer.component.html', styleUrls: ['./footer.component.scss'] })
export class FooterComponent {
  @Input() resume: any;
  get socialLinks(): Array<{ label: string; url: string }> { const home = this.resume && this.resume.home; if (!home) { return []; } return [{ label: 'LinkedIn', url: home.linkedin }, { label: 'Website', url: home.website }].filter((link) => link.url && /^https?:\/\//.test(link.url)); }
}

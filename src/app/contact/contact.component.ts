import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({ selector: 'app-contact', templateUrl: './contact.component.html', styleUrls: ['./contact.component.scss'] })
export class ContactComponent {
  @Input() resume: any;
  submitted = false;
  message = { name: '', email: '', subject: '', body: '' };
  send(form: NgForm): void { if (form.invalid) { return; } const recipient = this.resume?.about?.email; if (!recipient) { return; } const subject = encodeURIComponent(this.message.subject || 'Message from ' + this.message.name); const body = encodeURIComponent(this.message.body + '\n\nFrom: ' + this.message.name + ' (' + this.message.email + ')'); window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body; this.submitted = true; form.resetForm(); }
}

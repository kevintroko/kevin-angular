import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = [
    {
      name: 'Email',
      icon: 'mail',
      value: ''
    },
    {
      name: 'Github',
      icon: 'code',
      value: ''
    },
    {
      name: 'LinkedIn',
      icon: 'business_center',
      value: ''
    },
    {
      name: 'StackOverflow',
      icon: 'help_center',
      value: ''
    },
    {
      name: 'Blog',
      icon: 'rss_feed',
      value: ''
    }
  ];
}

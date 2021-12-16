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
      icon: '',
      value: ''
    },
    {
      name: 'LinkedIn',
      icon: '',
      value: ''
    },
    {
      name: 'StackOverflow',
      icon: '',
      value: ''
    },
    {
      name: 'Blog',
      icon: '',
      value: ''
    }
  ];
}

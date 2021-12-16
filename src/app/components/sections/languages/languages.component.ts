import { Language } from './../../../models/language';
import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  languages: Language[] = [
    {
      name: 'Spanish',
      level: 'Native',
      emoji: '🇲🇽'
    },
    {
      name: 'English',
      level: 'Advanced',
      emoji: '🇺🇸',
      details: [
        {
          title: 'TOEFL Score 610'
        },
        {
          title: 'Advanced Business English Course',
          company: 'Corporate English Association',
          url: '',
        },
        {
          title: 'Upper Intermediate Business English Course',
          company: 'Corporate English Association',
          url: '',
        }
      ]
    },
    {
      name: 'Swedish',
      level: 'Basic',
      emoji: '🇸🇪',
      details: [
        {
          title: 'G in Swedish for foreign students',
          company: 'Mälardalens University'
        },
        {
          title: 'Aug - Dec 2020, Swedish I',
          company: 'Tec de Monterrey CCM (online course)'
        },
        {
          title: 'Jan - May 2021, Swedish II',
          company: 'Tec de Monterrey CCM (online course)'
        },
        {
          title: 'Aug - Dec 2021, Swedish III',
          company: 'Tec de Monterrey CCM (online course)'
        }
      ]
    }
  ];
}

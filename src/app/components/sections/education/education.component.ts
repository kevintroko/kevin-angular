import { University } from './../../../models/university';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  universities: University[] = [
    {
      degree: 'B.Sc. Computer Systems Engineering',
      name: 'Tecnológico de Monterrey, Campus Guadalajara',
      city: 'Guadalajara, Mexico',
      date: 'August 2014 - May 2019',
      country: '🇲🇽',
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Facultad_de_ingenier%C3%ADas_en_ITESM_campus_Guadalajara.jpg'
    },
    {
      degree: 'Exchange Student in Software Engineering',
      name: 'Mälardalens Högskola',
      city: 'Västerås, Sweden',
      date: 'August 2017 - June 2018',
      country: '🇸🇪',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/M%C3%A4lardalens_h%C3%B6gskolas_huvudentr%C3%A9_V%C3%A4ster%C3%A5s.jpg'
    }
  ];
}

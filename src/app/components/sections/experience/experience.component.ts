import { Experience } from './../../../models/experience';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Software Engineer, Backend and Frontend',
      startDate: 'June 2020',
      endDate: 'Present'
    },
    {
      title: 'Software Engineer, Secondment',
      startDate: 'August 2020',
      endDate: 'May 2021'
    },
    {
      title: 'Software Engineer, Backend and Frontend',
      startDate: 'June 2019',
      endDate: 'June 2020'
    },
    {
      title: 'Software Engineer, Frontend (Halftime)',
      startDate: 'January 2019',
      endDate: 'June 2019'
    },
  ];
}

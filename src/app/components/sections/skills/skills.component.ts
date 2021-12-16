import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    'Typescript',
    'Javascript',
    'Java',
    'NodeJS',
    'Angular',
    'Springboot',
    'HTML',
    'SCSS',
    'PostgreSQL',
    'JUnit5',
    'Jasmine',
    'Python'
  ];
  otherSkills = [
    'GIT',
    'Mocha',
    'Jira',
    'Confluence',
    'Myro',
    'Cypress',
    'Docker',
    'Postman',
    'Agile methodologies',
    'AdobeXD',
    'Zapworks Studio',
    'Power Apps',
    'Microsoft suite'
  ];
}

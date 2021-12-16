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
    'Python'
  ];
  otherSkills = [
    'GIT',
    'JUnit5',
    'Jasmine',
    'Mocha',
    'Jira',
    'Confluence',
    'Myro',
    'Cypress',
    'Docker',
    'Postman',
    'Agile',
    'AdobeXD',
    'Zapworks Studio',
    'Power Apps',
    'Microsoft suite'
  ];
}

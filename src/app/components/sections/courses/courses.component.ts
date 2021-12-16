import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses = [
    {
      name: 'Advanced Certified Scrum',
      company: 'Scrum Alliance',
      date: 'December 2020',
      description: `Certification of a deep understanding of Scrum, Agile engineering skills,
      including architecture and design, refactoring, test-driven development and integrating continuously.
      3 hours a day for two weeks. The certification included activities,
      practical labs and a final exam to reinforce the concepts learned during the course.`
    },
    {
      name: 'OWASP Top Ten Vulnerabilities',
      company: 'Infosec',
      date: 'August 2021',
      description: `Online course that teaches about the most common vulnerabilities and how to mitigate them.
      It included videos, quizzes, a final exam, and a laboratory.`
    },
    {
      name: 'Iknal Semikan Migration Program',
      company: 'Iknal Semikal',
      date: 'December 2021',
      description: `Migration program for engineers: A set of online courses about the Swedish language,
      culture and other important topics concerning the preparation to work in a Swedish company and have
      a straightforward migration process.`
    },
    {
      name: 'SQL & Postgresql for Beginners',
      company: 'Udemy',
      date: 'July 2021',
      description: `Online course of nine hours that explain the basics and the more advanced concepts of PostgreSQL.
      Each of the nine modules includes a challenge to practice learned concepts.`
    }
  ];
}

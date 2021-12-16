import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { CoursesComponent } from './components/sections/courses/courses.component';
import { LanguagesComponent } from './components/sections/languages/languages.component';
import { EducationComponent } from './components/sections/education/education.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'skills' , component: SkillsComponent },
  { path: 'experience' , component: ExperienceComponent },
  { path: 'education' , component: EducationComponent },
  { path: 'languages' , component: LanguagesComponent },
  { path: 'courses' , component: CoursesComponent },
  { path: 'contact', component:  ContactComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

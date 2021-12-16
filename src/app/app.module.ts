import { CustomMaterialModule } from './../module/custom-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { EducationComponent } from './components/sections/education/education.component';
import { LanguagesComponent } from './components/sections/languages/languages.component';
import { CoursesComponent } from './components/sections/courses/courses.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { BrownButtonComponent } from './components/reusable/brown-button/brown-button.component';
import { ButtonsBottomBarComponent } from './components/reusable/buttons-bottom-bar/buttons-bottom-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    LanguagesComponent,
    CoursesComponent,
    ContactComponent,
    NotFoundComponent,
    HomeComponent,
    BrownButtonComponent,
    ButtonsBottomBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

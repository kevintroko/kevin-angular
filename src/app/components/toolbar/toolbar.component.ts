import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  tabs = [
    { name: 'Home' },
    { name: 'Skills' },
    { name: 'Experience' },
    { name: 'Education' },
    { name: 'Languages' },
    { name: 'Courses' },
    { name: 'Contact' }
  ];
}

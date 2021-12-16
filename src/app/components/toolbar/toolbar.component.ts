import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  tabs = [
    { name: 'skills' },
    { name: 'experience' },
    { name: 'education' },
    { name: 'languages' },
    { name: 'courses' },
    { name: 'contact' }
  ];

  constructor(private _router: Router) {}

  navigate(url: string): void {
    this._router.navigate([`/${url}`]);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brown-button',
  templateUrl: './brown-button.component.html',
  styleUrls: ['./brown-button.component.scss']
})
export class BrownButtonComponent {
  @Input() text: string = 'button';
}

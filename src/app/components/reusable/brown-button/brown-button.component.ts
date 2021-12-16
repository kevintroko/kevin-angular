import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-brown-button',
  templateUrl: './brown-button.component.html',
  styleUrls: ['./brown-button.component.scss']
})
export class BrownButtonComponent {
  @Input() text: string = 'button';
  @Output() clickEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  emitClick(): void {
    this.clickEmitter.emit(true);
  }
}

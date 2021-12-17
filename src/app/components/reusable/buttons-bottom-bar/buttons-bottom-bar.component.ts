import { Router } from '@angular/router';
import { Tabs } from './../../../models/tabs';
import { TOOLBAR_TABS } from './../../../constants/toolbar-tabs';
import { NavigationService } from './../../../services/navigation-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-bottom-bar',
  templateUrl: './buttons-bottom-bar.component.html',
  styleUrls: ['./buttons-bottom-bar.component.scss']
})
export class ButtonsBottomBarComponent {
  tabs = TOOLBAR_TABS;

  constructor(
    private _navigationService: NavigationService,
    private _router: Router
  ) { }

  get index(): number {
    return this.tabs.findIndex((tab: Tabs) => tab.name === this._navigationService.getCurrentRoute());
  }

  goBack(): void {
    if (this.index) {
      this._router.navigate([`${this.tabs[this.index - 1].name}`])
    } else {
      this._router.navigate(['/']);
    }
  }

  goNext(): void {
    if (this.index < this.tabs.length - 1) {
      this._router.navigate([`${this.tabs[this.index + 1].name}`])
    }
  }
}

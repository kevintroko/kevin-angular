import { TOOLBAR_TABS } from './../../constants/toolbar-tabs';
import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnDestroy {
  tabs = TOOLBAR_TABS;
  tabSubscriber: Subscription | undefined;
  activeTab: string = '';

  constructor(private _router: Router) {
    this._router.events.subscribe((event) => {
      // Listens to active route to set the active status at toolbar
      if (event instanceof NavigationStart) {
        this.activeTab = event.url.split('/')[1];
      }
    });
  }

  navigate(url: string): void {
    this._router.navigate([`/${url}`]);
  }

  ngOnDestroy(): void {
    // Avoid subscription to the same thing multiple times
    if (this.tabSubscriber) {
      this.tabSubscriber.unsubscribe();
    }
  }
}

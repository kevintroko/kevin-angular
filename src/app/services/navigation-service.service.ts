import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private _currentRoute: string = '';

  setCurrentRoute(route: string): void {
    this._currentRoute = route;
  }

  getCurrentRoute(): string {
    return this._currentRoute;
  }
}

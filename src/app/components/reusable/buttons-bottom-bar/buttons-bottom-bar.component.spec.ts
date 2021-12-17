import { TOOLBAR_TABS } from './../../../constants/toolbar-tabs';
import { NavigationService } from './../../../services/navigation-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsBottomBarComponent } from './buttons-bottom-bar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

describe('ButtonsBottomBarComponent', () => {
  let component: ButtonsBottomBarComponent;
  let fixture: ComponentFixture<ButtonsBottomBarComponent>;
  let navigationService: NavigationService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsBottomBarComponent ],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsBottomBarComponent);
    component = fixture.componentInstance;
    navigationService = TestBed.inject(NavigationService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the next tab if its not the last available screen', () => {
    const spy = spyOn(router, 'navigate');
    navigationService.setCurrentRoute(TOOLBAR_TABS[0].name);
    component.goNext();
    expect(spy).toHaveBeenCalledWith([TOOLBAR_TABS[1].name]);
  });

  it('should navigate to home if tab is the first screen', () => {
    const spy = spyOn(router, 'navigate');
    navigationService.setCurrentRoute(TOOLBAR_TABS[0].name);
    component.goBack();
    expect(spy).toHaveBeenCalledWith(['/']);
  });

  it('should navigate to home if tab is the first screen', () => {
    const spy = spyOn(router, 'navigate');
    navigationService.setCurrentRoute(TOOLBAR_TABS[1].name);
    component.goBack();
    expect(spy).toHaveBeenCalledWith([TOOLBAR_TABS[0].name]);
  });
});

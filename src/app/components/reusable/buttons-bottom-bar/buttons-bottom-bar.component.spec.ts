import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsBottomBarComponent } from './buttons-bottom-bar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ButtonsBottomBarComponent', () => {
  let component: ButtonsBottomBarComponent;
  let fixture: ComponentFixture<ButtonsBottomBarComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrownButtonComponent } from './brown-button.component';

describe('BrownButtonComponent', () => {
  let component: BrownButtonComponent;
  let fixture: ComponentFixture<BrownButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrownButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit click when triggered', () => {
    const spy = spyOn(component.clickEmitter, 'emit');
    component.emitClick();
    expect(spy).toHaveBeenCalledWith(true);
  });
});

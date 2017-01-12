/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UiElementsSlidersComponent } from './ui-elements-sliders.component';

describe('UiElementsSlidersComponent', () => {
  let component: UiElementsSlidersComponent;
  let fixture: ComponentFixture<UiElementsSlidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiElementsSlidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiElementsSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

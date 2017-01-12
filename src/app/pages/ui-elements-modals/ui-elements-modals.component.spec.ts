/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UiElementsModalsComponent } from './ui-elements-modals.component';

describe('UiElementsModalsComponent', () => {
  let component: UiElementsModalsComponent;
  let fixture: ComponentFixture<UiElementsModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiElementsModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiElementsModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UiElementsIconsComponent } from './ui-elements-icons.component';

describe('UiElementsIconsComponent', () => {
  let component: UiElementsIconsComponent;
  let fixture: ComponentFixture<UiElementsIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiElementsIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiElementsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

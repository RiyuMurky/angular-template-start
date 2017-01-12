/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsAdvancedElementsComponent } from './forms-advanced-elements.component';

describe('FormsAdvancedElementsComponent', () => {
  let component: FormsAdvancedElementsComponent;
  let fixture: ComponentFixture<FormsAdvancedElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsAdvancedElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAdvancedElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

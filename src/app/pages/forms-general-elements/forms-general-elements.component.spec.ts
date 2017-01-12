/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsGeneralElementsComponent } from './forms-general-elements.component';

describe('FormsGeneralElementsComponent', () => {
  let component: FormsGeneralElementsComponent;
  let fixture: ComponentFixture<FormsGeneralElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsGeneralElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsGeneralElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

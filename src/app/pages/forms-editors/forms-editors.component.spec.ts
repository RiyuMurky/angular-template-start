/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsEditorsComponent } from './forms-editors.component';

describe('FormsEditorsComponent', () => {
  let component: FormsEditorsComponent;
  let fixture: ComponentFixture<FormsEditorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsEditorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsEditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

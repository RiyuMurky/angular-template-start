/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WpSocialUserV1Component } from './wp-social-user-v1.component';

describe('WpSocialUserV1Component', () => {
  let component: WpSocialUserV1Component;
  let fixture: ComponentFixture<WpSocialUserV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpSocialUserV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpSocialUserV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

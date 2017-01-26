/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WpSocialUserV2Component } from './wp-social-user-v2.component';

describe('WpSocialUserV2Component', () => {
  let component: WpSocialUserV2Component;
  let fixture: ComponentFixture<WpSocialUserV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpSocialUserV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpSocialUserV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

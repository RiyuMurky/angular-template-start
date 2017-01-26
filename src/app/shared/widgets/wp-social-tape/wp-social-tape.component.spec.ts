/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WpSocialTapeComponent } from './wp-social-tape.component';

describe('WpSocialTapeComponent', () => {
  let component: WpSocialTapeComponent;
  let fixture: ComponentFixture<WpSocialTapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpSocialTapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpSocialTapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

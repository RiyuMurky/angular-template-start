/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WpDirectChatComponent } from './wp-direct-chat.component';

describe('WpDirectChatComponent', () => {
  let component: WpDirectChatComponent;
  let fixture: ComponentFixture<WpDirectChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpDirectChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpDirectChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

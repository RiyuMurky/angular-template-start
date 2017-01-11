/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SidebarMenuExchangeService } from './sidebar-menu-exchange.service';

describe('SidebarMenuExchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebarMenuExchangeService]
    });
  });

  it('should ...', inject([SidebarMenuExchangeService], (service: SidebarMenuExchangeService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeaderExchangeService } from './header-exchange.service';

describe('HeaderExchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderExchangeService]
    });
  });

  it('should ...', inject([HeaderExchangeService], (service: HeaderExchangeService) => {
    expect(service).toBeTruthy();
  }));
});

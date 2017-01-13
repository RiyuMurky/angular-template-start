/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WidgetExchangeService } from './widget-exchange.service';

describe('WidgetExchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetExchangeService]
    });
  });

  it('should ...', inject([WidgetExchangeService], (service: WidgetExchangeService) => {
    expect(service).toBeTruthy();
  }));
});

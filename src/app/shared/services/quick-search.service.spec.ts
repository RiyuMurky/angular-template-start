/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuickSearchService } from './quick-search.service';

describe('QuickSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuickSearchService]
    });
  });

  it('should ...', inject([QuickSearchService], (service: QuickSearchService) => {
    expect(service).toBeTruthy();
  }));
});

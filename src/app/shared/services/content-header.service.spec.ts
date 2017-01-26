/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContentHeaderService } from './content-header.service';

describe('ContentHeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentHeaderService]
    });
  });

  it('should ...', inject([ContentHeaderService], (service: ContentHeaderService) => {
    expect(service).toBeTruthy();
  }));
});

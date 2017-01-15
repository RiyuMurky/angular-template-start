import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class QuickSearchService {

  public searchSubject: ReplaySubject<string> = new ReplaySubject<string>(1);

  public constructor() { }

  public search(value: string):void {
    this.searchSubject.next(value);
  }

}

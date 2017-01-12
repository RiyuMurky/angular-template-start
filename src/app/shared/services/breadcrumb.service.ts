import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class BreadcrumbService {
  // TODO: type for ReplaySubject (Breadcrumb)
  public current: ReplaySubject<any>;

  constructor() {
    this.current = new ReplaySubject(1);
  }

  public set(value: any) {
    this.current.next(value);
  }
}

import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';

@Injectable()
export class SidebarMenuExchangeService {
  // Subject
  public openMenuSubject:Subject<MenuItem> = new Subject<MenuItem>();

  public openMenu(value: MenuItem):void {
      this.openMenuSubject.next(value);
  }

  constructor() { }

}

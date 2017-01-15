import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import {EventsService } from './events.service';
import 'rxjs/add/operator/map';

@Injectable()
export class HeaderExchangeService {
  // Subject
  public openMenuSubject:Subject<Event> = new Subject<Event>();

  public openMenu(value: Event):void {
      this.openMenuSubject.next(value);
  }

  public constructor(private _eventsService:EventsService) {
    this._eventsService.mouseClickObservable.subscribe((event:MouseEvent) => {
      this.openMenuSubject.next(event as Event);
    });
  }

}

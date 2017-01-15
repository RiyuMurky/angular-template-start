import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Injectable()
export class EventsService {

  public mouseClickObservable:Observable<MouseEvent> = Observable.fromEvent(document, "click");
  public mouseMoveObservable:Observable<MouseEvent> = Observable.fromEvent(document, "mousemove");

  public constructor() {

  }

}

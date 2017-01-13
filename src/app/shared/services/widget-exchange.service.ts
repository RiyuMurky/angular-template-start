import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';

@Injectable()
export class WidgetExchangeService {

  public subjectMap: ReplaySubject<WidgetData>[] = [];
  private observableMap: ObservableMap<ReplaySubject<WidgetData>> = {};


  private checkInstance(instance: string): void {
    if(!(instance in this.observableMap)){
      this.observableMap[instance] = new ReplaySubject<WidgetData>(1);
    }
  }

  public push(instance: string, data: WidgetData): void {
    this.checkInstance(instance);
    this.observableMap[instance].next(data);
  }

  public getObservable(instance: string):Observable<WidgetData> {
    this.checkInstance(instance);
    return this.observableMap[instance].asObservable();
  }

  public constructor() { }

}

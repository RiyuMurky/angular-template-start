import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: '[app-clock-menu]',
  templateUrl: './clock-menu.component.html',
  styleUrls: ['./clock-menu.component.css']
})
export class ClockMenuComponent implements OnInit {

  public time: Observable<string> = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000)
  });

  public onControlSidebarToggle(event: Event): void {
    event.preventDefault();
  }

  public constructor() { }

  ngOnInit() {
  }

}

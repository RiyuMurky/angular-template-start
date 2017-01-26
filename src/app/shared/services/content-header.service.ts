import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";

@Injectable()
export class ContentHeaderService {
  public currentHeaderSubject: ReplaySubject<HeaderData>;
  public readonly route_data: string = "header";

  public constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.currentHeaderSubject = new ReplaySubject(1);
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {

      console.log(event);
      console.log(this.activatedRoute);
      console.log(this.router);

      let current: ActivatedRoute = this.activatedRoute;
      if (current.snapshot.data.hasOwnProperty(this.route_data)) {
        let headerData: HeaderData = current.snapshot.data[this.route_data];
        this.currentHeaderSubject.next(headerData);
      }
    });
  }
}

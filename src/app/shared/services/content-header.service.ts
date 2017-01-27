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
    // this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
    //   let root: ActivatedRoute = this.activatedRoute.root;
    //   let current: ActivatedRoute =  this.activatedRoute;
    //   if (current.snapshot.data.hasOwnProperty(this.route_data)) {
    //     let headerData: HeaderData = current.snapshot.data[this.route_data];
    //     this.currentHeaderSubject.next(headerData);
    //   }
    // });

    this.router.events
        .filter(event => event instanceof NavigationEnd)
        .map(() => this.activatedRoute)
        .map(route => {
          while (route.firstChild) route = route.firstChild;
          return route;
        })
        .filter(route => route.outlet === 'primary')
        .mergeMap(route => route.data)
        .subscribe((event) => this.currentHeaderSubject.next(event[this.route_data]));

  }
}

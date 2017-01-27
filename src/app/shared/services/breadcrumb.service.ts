import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";


@Injectable()
export class BreadcrumbService {
  // TODO: type for ReplaySubject (Breadcrumb)
  public currentBreadcrumbSubject: ReplaySubject<Breadcrumb[]>;
  public readonly route_data: string = "breadcrumb";
  // public breadcrumbs: Breadcrumb[];


  public constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.currentBreadcrumbSubject = new ReplaySubject(1);
    // this.breadcrumbs = [];
    //subscribe to the NavigationEnd event
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        let root: ActivatedRoute = this.activatedRoute.root;
        this.set(this.getBreadcrumbs(root));
      });

  }

  public set(value: Breadcrumb[]) {
    this.currentBreadcrumbSubject.next(value);
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = "", breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    //get the child routes
    let children: ActivatedRoute[] = route.children;
    //return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }
    //iterate over each children
    for (let child of children) {
      //verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      //verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(this.route_data)) {
        continue;
      }

      //get the route's URL segment
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");
      //append route URL to URL
      url += `/${routeURL}`;

      //add breadcrumb
      let items: BreadcrumbData[];
      if(!Array.isArray(child.snapshot.data[this.route_data])){
        items = [child.snapshot.data[this.route_data]];
      } else {
        items = child.snapshot.data[this.route_data];
      }

      for (let item of items) {

        let breadcrumb: Breadcrumb = {
          label: item.label,
          icon: item.icon,
          params: child.snapshot.params,
          url: url
        };

        breadcrumbs.push(breadcrumb);

      }


      //recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}

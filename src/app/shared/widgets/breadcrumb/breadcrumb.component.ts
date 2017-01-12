import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  private display: boolean = false;
  // TODO: type for breadcrumb
  private breadcrumb: Array<any> = [];

  public constructor() {
      // getting the data from the services
      // private breadServ: BreadcrumbService
      // this.breadServ.current.subscribe((data) => {
      //   this.breadcrumb = data.breadcrumb;
      // });
  }

  ngOnInit() {
  }

}

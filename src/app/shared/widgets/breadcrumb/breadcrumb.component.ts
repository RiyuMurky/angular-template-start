import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { BreadcrumbService } from 'app/shared/services/breadcrumb.service';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  private display: boolean = false;
  // TODO: type for breadcrumb
  private breadcrumb: Array<any> = [];
  public pageHeader:string = 'Page Header';
  public description:string = 'Optional description';

  public constructor(private breadcrumbService:BreadcrumbService) {
      this.breadcrumbService.subsribe((data) => {
        this.breadcrumb = data.breadcrumb;
      });
  }

  ngOnInit() {
  }

}

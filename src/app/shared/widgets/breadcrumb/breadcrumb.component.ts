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
  public breadcrumbs: Breadcrumb[] = [];

  public constructor(private breadcrumbService:BreadcrumbService) {
      this.breadcrumbService.currentBreadcrumbSubject.subscribe((data: Breadcrumb[]) => {
        this.breadcrumbs = data;
      });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ContentHeaderService } from 'app/shared/services/content-header.service';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {

  public pageTitle: string = '';
  public pageInfo: string = '';

  public constructor(private contentHeaderService:ContentHeaderService) {
    this.contentHeaderService.currentHeaderSubject
      .subscribe((data: HeaderData) => {
        this.pageTitle = data.title;
        this.pageInfo = data.info;
      });
  }

  ngOnInit() {
  }

}

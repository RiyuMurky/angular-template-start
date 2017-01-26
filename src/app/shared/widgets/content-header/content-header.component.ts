import { Component, OnInit } from '@angular/core';
import { ContentHeaderService } from 'app/shared/services/content-header.service';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {

  public pageTitle: string = '';
  public pageDesc: string = '';

  public constructor(private contentHeaderService:ContentHeaderService) {
    this.contentHeaderService.currentHeaderSubject.subscribe((data: HeaderData) => {
      console.log(data);
      this.pageTitle = data.title;
      this.pageDesc = data.info;
    });
  }

  ngOnInit() {
  }

}

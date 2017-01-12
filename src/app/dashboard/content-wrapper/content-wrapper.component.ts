import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit {

  public pageHeader:string = 'Page Header';
  public description:string = 'Optional description';

  public constructor() { }

  ngOnInit() {
  }

}

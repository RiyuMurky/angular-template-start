import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-dashboard]',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public minHeightContent:number;

  constructor() {
    // $(".content-wrapper, .right-side").css('min-height', sidebar.height());
    this.minHeightContent = 1820;
  }

  ngOnInit() {
  }

}

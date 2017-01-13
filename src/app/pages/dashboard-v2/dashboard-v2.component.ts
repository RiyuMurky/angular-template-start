import { Component, OnInit } from '@angular/core';
import { WidgetExchangeService } from 'app/shared/services/widget-exchange.service';

@Component({
  selector: 'app-dashboard-v2',
  templateUrl: './dashboard-v2.component.html',
  styleUrls: ['./dashboard-v2.component.css']
})
export class DashboardV2Component implements OnInit {
  // Widget page info box (wpib)
  public infoBoxData: InfoBoxData[] = [
    {
      instanceName: 'wpib-cpu-traffic',
      bgColorClass: '',
      labelColorClass: 'bg-aqua',
      labelIconClass: 'ion ion-ios-gear-outline',
      contentText: 'CPU Traffic',
      // TODO: format contentNumber <small>%</small>
      contentNumber: 90,
      progress: false,
      progressValue: 0,
      progressDesc: ''
    },
    {
      instanceName: 'wpib-likes',
      bgColorClass: '',
      labelColorClass: 'bg-red',
      labelIconClass: 'fa fa-google-plus',
      contentText: 'Likes',
      // TODO: format contentNumber 41,410
      contentNumber: 41410,
      progress: false,
      progressValue: 0,
      progressDesc: '',
    },
    {
      instanceName: 'wpib-sales',
      bgColorClass: '',
      labelColorClass: 'bg-green',
      labelIconClass: 'ion ion-ios-cart-outline',
      contentText: 'Sales',
      contentNumber: 760,
      progress: false,
      progressValue: 0,
      progressDesc: '',
    },
    {
      instanceName: 'wpib-new-members',
      bgColorClass: '',
      labelColorClass: 'bg-yellow',
      labelIconClass: 'ion ion-ios-people-outline',
      contentText: 'CPU Traffic',
      // TODO: format contentNumber 2,000
      contentNumber: 2000,
      progress: false,
      progressValue: 0,
      progressDesc: '',
    }
  ];

  public constructor(private _widgetExchangeService:WidgetExchangeService) {
    for(let i = 0; i < this.infoBoxData.length; i++){
      this._widgetExchangeService.push(
        this.infoBoxData[i].instanceName,
        this.infoBoxData[i]
      );
    }
  }

  ngOnInit() {
  }

}

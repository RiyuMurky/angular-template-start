import { Component, OnInit } from '@angular/core';
import { WidgetExchangeService } from 'app/shared/services/widget-exchange.service';

@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './dashboard-v1.component.html',
  styleUrls: ['./dashboard-v1.component.css']
})
export class DashboardV1Component implements OnInit {
  // Widget page small box (wpsb)
  public smallBoxData: SmallBoxData[] = [
    {
      instanceName: 'wpsb-new-order',
      bgColorClass: 'bg-aqua',
      headerText: '150',
      descriptionText: 'New Orders',
      iconClass: 'ion ion-bag',
      routerLink: '',
      infoText: 'More Info',
      infoIconClass: 'fa fa-arrow-circle-right'
    },
    {
      instanceName: 'wpsb-bounce-rate',
      bgColorClass: 'bg-green',
      // TODO: format headerText
      // <sup style="font-size: 20px">%</sup>
      headerText: '53',
      descriptionText: 'Bounce Rate',
      iconClass: 'ion ion-stats-bars',
      routerLink: '',
      infoText: 'More Info',
      infoIconClass: 'fa fa-arrow-circle-right'
    },
    {
      instanceName: 'wpsb-user-registrations',
      bgColorClass: 'bg-yellow',
      headerText: '44',
      descriptionText: 'User Registrations',
      iconClass: 'ion ion-person-add',
      routerLink: '',
      infoText: 'More Info',
      infoIconClass: 'fa fa-arrow-circle-right'
    },
    {
      instanceName: 'wpsb-unique-visitors',
      bgColorClass: 'bg-red',
      headerText: '65',
      descriptionText: 'Unique Visitors',
      iconClass: 'ion ion-pie-graph',
      routerLink: '',
      infoText: 'More Info',
      infoIconClass: 'fa fa-arrow-circle-right'
    }
  ];

  public constructor(private _widgetExchangeService:WidgetExchangeService) {
    for(let i = 0; i < this.smallBoxData.length; i++){
      this._widgetExchangeService.push(
        this.smallBoxData[i].instanceName,
        this.smallBoxData[i]
      );
    }
  }

  ngOnInit() {
  }

}

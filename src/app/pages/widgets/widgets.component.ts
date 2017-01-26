import { Component, OnInit } from '@angular/core';
import { WidgetExchangeService } from 'app/shared/services/widget-exchange.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  // Widget page info box (wpib)
  public infoBoxData: InfoBoxData[] = [
    // ========================================================================
    // Info box without progress bar
    {
      instanceName: 'wpib-message',
      bgColorClass: '',
      labelColorClass: 'bg-aqua',
      labelIconClass: 'fa fa-envelope-o',
      contentText: 'Messages',
      // TODO: format contentNumber <small>%</small>
      contentNumber: 1410,
      progress: false,
      progressValue: 0,
      progressDesc: ''
    },
    {
      instanceName: 'wpib-bookmarks',
      bgColorClass: '',
      labelColorClass: 'bg-green',
      labelIconClass: 'fa fa-flag-o',
      contentText: 'Bookmarks',
      // TODO: format contentNumber 41,410
      contentNumber: 410,
      progress: false,
      progressValue: 0,
      progressDesc: '',
    },
    {
      instanceName: 'wpib-uploads',
      bgColorClass: '',
      labelColorClass: 'bg-yellow',
      labelIconClass: 'fa fa-files-o',
      contentText: 'Uploads',
      contentNumber: 13648,
      progress: false,
      progressValue: 0,
      progressDesc: '',
    },
    {
      instanceName: 'wpib-likes',
      bgColorClass: '',
      labelColorClass: 'bg-red',
      labelIconClass: 'fa fa-star-o',
      contentText: 'Likes',
      // TODO: format contentNumber 2,000
      contentNumber: 93139,
      progress: false,
      progressValue: 0,
      progressDesc: '',
    },
    // ========================================================================
    // Info box with progress bar
    {
      instanceName: 'wpib-bookmarks-progress',
      bgColorClass: 'bg-aqua',
      labelColorClass: '',
      labelIconClass: 'fa fa-bookmark-o',
      contentText: 'Bookmarks',
      contentNumber: 41410,
      progress: true,
      progressValue: 70,
      progressDesc: '70% Increase in 30 Days',
    },
    {
      instanceName: 'wpib-likes-progress',
      bgColorClass: 'bg-green',
      labelColorClass: '',
      labelIconClass: 'fa fa-thumbs-o-up',
      contentText: 'Likes',
      contentNumber: 41410,
      progress: true,
      progressValue: 70,
      progressDesc: '70% Increase in 30 Days',
    },
    {
      instanceName: 'wpib-events-progress',
      bgColorClass: 'bg-yellow',
      labelColorClass: '',
      labelIconClass: 'fa fa-calendar',
      contentText: 'Events',
      contentNumber: 41410,
      progress: true,
      progressValue: 70,
      progressDesc: '70% Increase in 30 Days',
    },
    {
      instanceName: 'wpib-comments-progress',
      bgColorClass: 'bg-red',
      labelColorClass: '',
      labelIconClass: 'fa fa-comments-o',
      contentText: 'Comments',
      contentNumber: 41410,
      progress: true,
      progressValue: 70,
      progressDesc: '70% Increase in 30 Days',
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

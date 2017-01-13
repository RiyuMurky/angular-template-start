import { Component, OnInit, Input } from '@angular/core';
import { WidgetExchangeService } from 'app/shared/services/widget-exchange.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-wp-info-box',
  templateUrl: './wp-info-box.component.html',
  styleUrls: ['./wp-info-box.component.css']
})
export class WpInfoBoxComponent implements OnInit {
  @Input()
  public nameWidgetInst:string;

  private wpBoxData:InfoBoxData;
  private nameWidget:string = 'wpInfoBox';
  private widgetObservable: Observable<InfoBoxData>;

  public constructor(private _widgetExchangeService:WidgetExchangeService) {
    this.wpBoxData = {
      bgColorClass: '',
      labelColorClass: 'bg-aqua',
      labelIconClass: 'ion ion-ios-gear-outline',
      contentText: 'CPU Traffic',
      contentNumber: 90,
      progress: false,
      progressValue: 70,
      progressDesc: '70% Increase in 30 Days',
    }
  }

  ngOnInit() {
    this.widgetObservable = this._widgetExchangeService.getObservable(this.nameWidgetInst);
    this.widgetObservable.subscribe((value:WidgetData) => {
      this.wpBoxData = value as InfoBoxData;
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { WidgetExchangeService } from 'app/shared/services/widget-exchange.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-wp-small-box',
  templateUrl: './wp-small-box.component.html',
  styleUrls: ['./wp-small-box.component.css']
})
export class WpSmallBoxComponent implements OnInit {
  @Input()
  public nameWidgetInst:string;

  private wpBoxData:SmallBoxData;
  private nameWidget:string = 'wpSmallBox';
  private widgetObservable: Observable<SmallBoxData>;

  public onClickMoreInfo(event:Event):void {
    event.preventDefault();
    // NOTE: for example
    alert(`${this.wpBoxData.infoText} - ${this.nameWidgetInst}`);
  }

  public constructor(private _widgetExchangeService:WidgetExchangeService) {
    this.wpBoxData = {
      bgColorClass: 'bg-aqua',
      headerText: 'Header small box',
      descriptionText: 'Description small box',
      iconClass: 'ion ion-bag',
      routerLink: '',
      infoText: 'More Info',
      infoIconClass: 'fa fa-arrow-circle-right'
    };
  }

  ngOnInit() {
    this.widgetObservable = this._widgetExchangeService.getObservable(this.nameWidgetInst);
    this.widgetObservable.subscribe((value:WidgetData) => {
      this.wpBoxData = value as SmallBoxData;
    });
  }

}

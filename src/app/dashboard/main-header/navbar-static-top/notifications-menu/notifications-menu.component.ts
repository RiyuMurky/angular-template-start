import { Component, OnInit, HostBinding } from '@angular/core';
import { HeaderExchangeService } from 'app/shared/services/header-exchange.service';

@Component({
  selector: '[app-notifications-menu]',
  templateUrl: './notifications-menu.component.html',
  styleUrls: ['./notifications-menu.component.css']
})
export class NotificationsMenuComponent implements OnInit {

  @HostBinding('class.open')
  public isAriaExpanded: boolean = false;
  public lastToggleEvent: Event;

  public onClickDropdownToggle(event:Event):void {
    event.preventDefault();
    this.isAriaExpanded = !this.isAriaExpanded;
    if(this.isAriaExpanded){
      this.lastToggleEvent = event;
      this.headerExchangeService.openMenu(event);
    }
  }

  public constructor(private headerExchangeService:HeaderExchangeService) {
    headerExchangeService.openMenuSubject.subscribe((value:Event) => {
      if(this.lastToggleEvent !== value) {
        this.isAriaExpanded = false;
      }
    });
  }

  ngOnInit() {
  }

}

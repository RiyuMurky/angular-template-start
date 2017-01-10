import { Component, OnInit, HostBinding } from '@angular/core';
import { HeaderExchangeService } from 'app/shared/services/header-exchange.service';

@Component({
  selector: '[app-tasks-menu]',
  templateUrl: './tasks-menu.component.html',
  styleUrls: ['./tasks-menu.component.css']
})
export class TasksMenuComponent implements OnInit {

  @HostBinding('class.open')
  public isAriaExpanded: boolean = false;
  public lastToggleEvent: Event;

  public onClickDropdownToggle(event:Event):void {
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

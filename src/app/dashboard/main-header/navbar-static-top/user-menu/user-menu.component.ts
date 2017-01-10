import { Component, OnInit, HostBinding } from '@angular/core';
import { HeaderExchangeService } from 'app/shared/services/header-exchange.service';
import { UserService } from 'app/shared/services/user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: '[app-user-menu]',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  // TODO: currentUser type
  public currentUser:Observable<any>;

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

  public constructor(private headerExchangeService:HeaderExchangeService, private userService:UserService) {
    headerExchangeService.openMenuSubject.subscribe((value:Event) => {
      if(this.lastToggleEvent !== value) {
        this.isAriaExpanded = false;
      }
    });
    this.currentUser = userService.currentUser;
  }

  ngOnInit() {
  }

  // Event click
  public onClickFollowers(event:Event):void {
    event.preventDefault();
    console.log(`onClickFollowers: ${event.target}`);
  }
  
  public onClickSales(event:Event):void {
    event.preventDefault();
    console.log(`onClickSales: ${event.target}`);
  }

  public onClickFriends(event:Event):void {
    event.preventDefault();
    console.log(`onClickFriends: ${event.target}`);
  }

  public onClickProfile(event:Event):void {
    event.preventDefault();
    console.log(`onClickProfile: ${event.target}`);
  }

  public onClickSignOut(event:Event):void {
    event.preventDefault();
    console.log(`onClickSignOut: ${event.target}`);
  }


}

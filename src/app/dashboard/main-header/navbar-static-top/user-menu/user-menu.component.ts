import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderExchangeService } from 'app/shared/services/header-exchange.service';
import { UserService } from 'app/shared/services/user.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: '[app-user-menu]',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  public currentUser:Observable<User>;

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

  public constructor(private headerExchangeService:HeaderExchangeService,
                     private userService:UserService,
                     private authService:AuthService,
                     private router:Router) {
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
    this.authService.logout();
    this.router.navigate(['/login']);
  }


}

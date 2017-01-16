import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'app/shared/services/state.service';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
    selector: 'app-navbar-static-top',
    templateUrl: './navbar-static-top.component.html',
    styleUrls: ['./navbar-static-top.component.css']
})
export class NavbarStaticTopComponent implements OnInit {

    public constructor(
      private stateService:StateService,
      private authService:AuthService,
      private router:Router)
    {

    }

    ngOnInit() { }

    // Event handler
    public onSidebarToggle(event: Event): void {
      event.preventDefault();
      this.stateService.isCloseSidebar = !this.stateService.isCloseSidebar;
    }

    public onControlSidebarToggle(event: Event): void {
      event.preventDefault();
    }

    public onControlSidebarLogout(event: Event): void {
      event.preventDefault();
      this.authService.logout();
      this.router.navigate(['/login']);
    }

}

import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../shared/services/state.service';

@Component({
    selector: 'app-navbar-static-top',
    templateUrl: './navbar-static-top.component.html',
    styleUrls: ['./navbar-static-top.component.css']
})
export class NavbarStaticTopComponent implements OnInit {

    public constructor(private _stateService:StateService) {}

    ngOnInit() { }

    // Event handler
    public onSidebarToggle(event: Event): void {
        event.preventDefault();
        this._stateService.isCloseSidebar = !this._stateService.isCloseSidebar;
    }

    public onControlSidebarToggle(event: Event): void {
        event.preventDefault();
    }

}

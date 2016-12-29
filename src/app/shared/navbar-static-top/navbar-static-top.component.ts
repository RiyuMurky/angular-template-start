import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar-static-top',
    templateUrl: './navbar-static-top.component.html',
    styleUrls: ['./navbar-static-top.component.css']
})
export class NavbarStaticTopComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    // Event handler
    public onSidebarToggle(event: Event): void {
        event.preventDefault();
    }

    public onControlSidebarToggle(event: Event): void {
        event.preventDefault();
    }

}

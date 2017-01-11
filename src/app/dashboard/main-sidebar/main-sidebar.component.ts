import { Component, OnInit } from '@angular/core';
import { SidebarMenuExchangeService } from 'app/shared/services/sidebar-menu-exchange.service';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css'],
  providers: [ SidebarMenuExchangeService ]
})
export class MainSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

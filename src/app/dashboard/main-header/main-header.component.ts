import { Component, OnInit } from '@angular/core';
import { HeaderExchangeService } from 'app/shared/services/header-exchange.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css'],
  providers: [ HeaderExchangeService ],
})
export class MainHeaderComponent implements OnInit {

  public logoHref: string = 'index2.html';
  public logoMini: string = '<b>A</b>LT';
  public logoLarge: string = '<b>Admin</b>LTE';

  constructor() { }

  ngOnInit() {
  }

}

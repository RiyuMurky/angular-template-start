import { Component } from '@angular/core';
import { StateService } from './shared/services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' ]
})
export class AppComponent {
  public title = 'app works!';

  public constructor(public _stateService:StateService){

  }
}

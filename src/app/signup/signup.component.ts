import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public onClickTerms(event:Event):void {
    event.preventDefault();
  }

  public constructor() { }

  ngOnInit() {
  }

}

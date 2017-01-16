import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  public isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  public redirectUrl: string;
  public users: User[] = [];

  public login(email:string, password:string): Observable<boolean> {
    console.log(email);
    console.log(password);

    let user: User;
    let isLogin: boolean = false;

    isLogin = this.users.some((value:User, index:number, array:User[]) => {
      if(value.email.toLowerCase() == email.toLowerCase() && value.password == password){
        user = value;
        return true;
      }
      return false;
    });

    console.log(isLogin);

    return Observable.of(isLogin).delay(1000).do(val => this.isLoggedIn = isLogin);
  }

  public logout(): void {
    this.isLoggedIn = false;
  }

  public pushUser(user: User):void {
    this.users.push(user);
  }

  public constructor(){ }
}

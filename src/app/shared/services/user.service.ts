import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

interface User {
  firstname: string;
  lastname: string;
  email: string;
  avatarUrl: string;
  creationDate?: string;
  preferredLang?: string;
  roleName?: string;
}

@Injectable()
export class UserService {
  public currentUser: ReplaySubject<User> = new ReplaySubject<User>(1);

  public constructor() {
    // TODO: user
    let user:User = {
      firstname: 'Alexander',
      lastname: 'Pierce',
      email: 'a.pierce@mail.com',
      avatarUrl: 'assets/img/user2-160x160.jpg',
      creationDate: 'Nov. 2012',
      preferredLang: 'en',
      roleName: 'Web Developer'
    }
    this.currentUser.next(user);
  }

  public setCurrentUser(user: User) {
      this.currentUser.next(user);
  }
}

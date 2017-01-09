import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  private _isCloseSidebar:boolean;

  constructor() {
    this._isCloseSidebar = false;
  }

  public get isCloseSidebar():boolean{
    return this._isCloseSidebar;
  }

  public set isCloseSidebar(value:boolean){
    console.log(`isCloseSidebar: ${value}`);
    this._isCloseSidebar = value;
  }

}

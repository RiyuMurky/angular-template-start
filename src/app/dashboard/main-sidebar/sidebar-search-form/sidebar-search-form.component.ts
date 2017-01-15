import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, FormArray, FormBuilder, Validators, NG_ASYNC_VALIDATORS,
  NG_VALIDATORS} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { QuickSearchService } from 'app/shared/services/quick-search.service';

@Component({
  selector: 'app-sidebar-search-form',
  templateUrl: './sidebar-search-form.component.html',
  styleUrls: ['./sidebar-search-form.component.css']
})
export class SidebarSearchFormComponent implements OnInit {

  public formModel: FormGroup;

  public constructor(private _fb: FormBuilder,
                     private _router:Router,
                     private _qsSevice:QuickSearchService) {
    this.formModel = this._fb.group({
      qsearch: ['', [Validators.required, Validators.minLength(3)]],
    },
    {
        // validator: this.equalValidator,
        // asyncValidator: this.asyncEqualValidator
    })
  }

  public goToSearch(){
    this._router.navigate(['dashboard', 'searchpage'])
  }

  // public equalValidator({value}:FormGroup): {[key: string]: boolean} {
  //   const [first, ...rest] = Object.keys(value || {});
  //   const valid = rest.every(v => value[v] === value[first])
  //   return valid ? null : {equal: true}
  // }

  public asyncEqualValidator({value}:FormGroup): Observable<{[key: string]: boolean}> {
    const [first, ...rest] = Object.keys(value || {});
    const valid = rest.every(v => value[v] === value[first])
    return Observable.of(valid ? null : {equal: true}).delay(5000)
  }

  public submit() {
    if(this.formModel.valid){
      this._qsSevice.search(this.formModel.controls['qsearch'].value);
      this.formModel.controls['qsearch'].reset();
      this.goToSearch();
    }
  }

  ngOnInit() {
  }

}

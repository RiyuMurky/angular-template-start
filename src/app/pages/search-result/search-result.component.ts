import { Component, OnInit } from '@angular/core';
import { QuickSearchService } from 'app/shared/services/quick-search.service';
import {FormControl, FormGroup, FormArray, FormBuilder, Validators, NG_ASYNC_VALIDATORS,
  NG_VALIDATORS} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public quickSearchObservable: Observable<string>;
  public formModel: FormGroup;
  public searchItems: { header:string, link:string, text:string }[];

  public constructor(private _quickSearchService:QuickSearchService,
                     private _fb: FormBuilder) {
    this.quickSearchObservable = this._quickSearchService.searchSubject.asObservable();
    this.formModel = this._fb.group({
      qsearch: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.quickSearchObservable.subscribe((value:string)=>{
      this.searchItems = [
        {
          header: value,
          link: '/dashboard',
          text: `Find text, ${value}`
        }
      ];
      this.formModel.controls['qsearch'].setValue(value);
    });
  }
  public submit():void {
    if(this.formModel.valid){
      this._quickSearchService.search(this.formModel.controls['qsearch'].value);
    }
  }

  ngOnInit() {
  }

}

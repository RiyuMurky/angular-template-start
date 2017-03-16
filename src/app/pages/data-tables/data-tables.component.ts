import { Component, OnInit } from '@angular/core';

interface ObjectRows {
  name:string;
  email:string;
  age:string;
  city:string;
}

interface ObjectDataTables {
  data:ObjectRows[];
}

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.css']
})
export class DataTablesComponent implements OnInit {

public data;

  public constructor() {
    this.data = [
      {name: "Vladimir", email:"vladimir@mail.com", age: "16", city: "mycity"},
      {name: "Eliza", email:"eliza@mail.com", age: "20", city: "mycity"},
    ];
  }

  ngOnInit() {

  }
}

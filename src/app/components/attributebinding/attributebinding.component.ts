import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributebinding',
  templateUrl: './attributebinding.component.html',
  styleUrls: ['./attributebinding.component.css']
})
export class AttributebindingComponent implements OnInit {

  colspanSize = { colspan: 2} ;
  constructor() { }

  ngOnInit() {
  }

}

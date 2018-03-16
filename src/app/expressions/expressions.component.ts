import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expressions',
  // templateUrl: './expressions.component.html',
  template: `
  <p>1 + 1 = {{1 + 1}}</p>
  <p>{{a}} * {{b}} = {{a * b}}</p>
  <p>Hello + Angular = {{[c, d].join(' ')}}</p>
  <p>e が {{e}} であれば、{{c}} => {{(e) ? c : d}}</p>
  `,
  styleUrls: ['./expressions.component.css']
})
export class ExpressionsComponent implements OnInit {

  a = 2;
  b = 3;
  c = 'Hello';
  d = 'Angular';
  e = false;
  constructor() { }

  ngOnInit() {
  }

}

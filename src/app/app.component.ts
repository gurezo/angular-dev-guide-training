import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is Angular Developer\’s Guide Training';
  constructor(
    private router: Router
  ) { }

  movePage(urls: string) {
    this.router.navigate([urls]);
  }
}

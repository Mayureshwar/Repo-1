import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() callBack: Function;

  constructor() { }

  bindFunc(y) {
    console.log(y);
  }
}

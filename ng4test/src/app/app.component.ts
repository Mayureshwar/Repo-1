import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  @Input() callBack: Function;

  constructor() { }

  bindFunc(y) {
    console.log(y);
  }
}

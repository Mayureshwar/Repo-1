import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Output() callBack: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.firstFunc();
  }

  firstFunc() {
    this.callBack.emit(['ABC']);
  }

}

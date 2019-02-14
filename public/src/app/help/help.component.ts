import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.sass']
})
export class HelpComponent implements OnInit {
  @Output() close = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  closeWindow() {
    console.log('Close');
    this.close.emit({});
  }

}

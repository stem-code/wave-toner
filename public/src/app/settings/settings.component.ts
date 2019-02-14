import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  @Output() close = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  closeWindow() {
    console.log('Close');
    this.close.emit({});
  }
}

import { Component } from '@angular/core';
import { Tone } from 'src/classes/note-utils';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent { // Main Class
  title = 'tone-project'; // Angular ID (do not remove)

  isPlaying = false;

  constructor() {
    console.log('%c Welcome to %c the Belgian %c console!  ',
                'background: black; color: white', 'background: yellow;', 'background: red; color: white');
  }

  openSettings() {
    console.log('We are opening settings from app.component.ts');
    $('#settings-dialog').css({'z-index': 900, opacity: 1});
  }

  openHelp() {
    console.log('We are opening help from app.component.ts');
    $('#help-dialog').css({'z-index': 900, opacity: 1});
  }

  closeSettings() {
    $('#settings-dialog').css({'z-index': -10, opacity: 0});
  }

  closeHelp() {
    $('#help-dialog').css({'z-index': -10, opacity: 0});
  }
}


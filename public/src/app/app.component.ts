import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { WaveManager, Wave } from './wave-manager/waveManager';
import { KeyboardManager } from 'src/classes/keyboardManager';
import { noteFreqMap } from 'src/data/data';
import { SettingsManager } from 'src/classes/settings-manager';
import { MusicBox } from 'src/classes/musicBox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit { // Main Class
  title = 'tone-project'; // Angular ID (do not remove)

  isPlaying = false;

  fileMode = 'save';

  WaveManager: WaveManager;
  KeyboardManager: KeyboardManager;
  settingsManager = SettingsManager;


  currentNoteName = 'Silence';
  currentNoteFreq = '0';
  octave = 4;

  baseWave: Wave;

  waves: Wave[] = [];
  menuOpen = true;

  constructor() {
    console.log('%c Welcome to %c the Belgian %c console!  ',
                'background: black; color: white', 'background: yellow;', 'background: red; color: white');
    console.log('%c Welcome to %c the Invisible %c console!  ',
                'background: grey; color: lightgrey', 'background: lightgrey; color:white', 'background: white; color: lightgrey');
    this.WaveManager = new WaveManager();

    this.KeyboardManager = new KeyboardManager( // register keyboard presses
      noteFreqMap,
      (noteName, noteFreq) => {
        this.currentNoteName = noteName;
        this.currentNoteFreq = noteFreq;
      },
      (octave) => {
        this.octave = octave;
      },
      this.WaveManager,
      this.octave);
  }

  ngOnInit() {
    this.waves.push(
      {wavelength: 350, amplitude: 100, color: 'green', base: true,
      name: 'Base Frequency', editing: false, priorNum: 0, frequency: 100 / 350}
    );
    this.baseWave = this.waves[this.waves.length - 1]; // set the base
    this.WaveManager.setWaves(this.waves);
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

  save() {
    this.fileMode = 'save';
    $('app-file-window').css({'z-index': 5000, 'opacity': 1});
  }

  open() {
    this.fileMode = 'open';
    $('app-file-window').css({'z-index': 5000, 'opacity': 1});
  }

  setWaveData(event) {
    $('app-file-window').css({'z-index': -5000, 'opacity': 0});
    console.log(event);
    if (!event) {
       return 0;
    }
    this.waves = event.waves;
  }

  newWave() {
    this.waves.push(
      {wavelength: 2, name: '', base: false, color: 'blue',
      amplitude: 50, editing: false, priorNum: 0, frequency: 100}
    );
    this.WaveManager.setWaves(this.waves);
  }

  toggleMenu() {
    console.log('Toggling Menu');
    if (this.menuOpen) {
      $('#settings-panel').addClass('settings-collapsed');
      $('#chevron').addClass('chevron-collapsed');
      $('#canvas-container').addClass('canvas-container-collapsed');
      this.menuOpen = false;
    } else {
      $('#settings-panel').removeClass('settings-collapsed');
      $('#chevron').removeClass('chevron-collapsed');
      $('#canvas-container').removeClass('canvas-container-collapsed');
      this.menuOpen = true;
    }
  }

  focusInput() {
    console.log('focusing...');
    setTimeout(() => {
      $('.notouch').focus();
    }, 50);
  }

  changeFreq(idx) {
    this.waves[idx].wavelength = 100 / this.waves[idx].frequency;
  }

  changeWav(idx) {
    this.waves[idx].frequency = 100 / this.waves[idx].wavelength;
  }

  deleteWave(idx) {
    this.waves.splice(idx, 1);
  }

  playMusic() {
    // MusicBox.playMusic((o) => {
    //   this.octave = o;
    //   this.KeyboardManager.setOctave(o);
    // });

    MusicBox.playMusic(note => {
      this.octave = +note[note.length - 1];
      note = note.substr(0, note.length - 1);

      this.KeyboardManager.setOctave(this.octave);
      this.KeyboardManager.playNote(note);
    }, note => {
      note = note.substr(0, note.length - 1);
      this.KeyboardManager.stopNote(note);
    });
  }
}


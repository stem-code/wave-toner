import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
import { noteFreqMap } from '../../data/data';
import { Tone } from '../../../src/classes/note-utils';

interface Wave {
  amplitude: number;
  wavelength: number;
  color: string;
  base: boolean;
  name: string;
  editing: boolean;
  priorNum: number;
}

@Component({
  selector: 'app-tone-graph',
  templateUrl: './tone-graph.component.html',
  styleUrls: ['./tone-graph.component.sass']
})
export class ToneGraphComponent implements OnInit {
  @Output() settings = new EventEmitter<any>();
  @Output() help = new EventEmitter<any>();

  gameCanvas: HTMLCanvasElement;
  renderingContext: CanvasRenderingContext2D;

  canvasWidth = 500;
  canvasHeight = 300;

  time: number;
  waves: Wave[] = [];

  audioCtx: AudioContext = new ((<any>window).AudioContext || (<any>window).webkitAudioContext)();

  noteIDCounter = 0;
  currentTone: Tone;

  menuOpen = true;

  currentNoteName = 'C#';
  currentNoteFreq = 200;

  tones = [];

  constructor() {
    document.onkeypress = (e: KeyboardEvent) => {
      const charCode = (typeof e.which === 'number') ? e.which : e.keyCode;
      const char = String.fromCharCode(charCode);
      if (!noteFreqMap.hasOwnProperty(char)) {
        console.log('Invalid Key!');
      } else {
        this.currentTone = this.playNote(noteFreqMap[char][5]);
      }
    };
  }

  ngOnInit() {
    this.gameCanvas = <HTMLCanvasElement>document.getElementById('rendering-canvas');

    this.gameCanvas.width = this.canvasWidth;
    this.gameCanvas.height = this.canvasHeight;

    console.log(this.gameCanvas);

    this.renderingContext = this.gameCanvas.getContext('2d');
    this.time = 0;

    // Some examples:
    // this.renderingContext.fillRect(x, y, w, h)
    // https://www.w3schools.com/html/html5_canvas.asp

    this.waves.push({wavelength: 350, amplitude: 100, color: 'green', base: true, name: 'Base Frequency', editing: false, priorNum: 0});

    const samples = 1000;
    const moveRate = -(1 / samples) * this.canvasWidth;
    console.log(moveRate);
    const renderLoop = () => {
      // this.renderingContext.globalCompositeOperation = 'copy';
      // this.renderingContext.imageSmoothingEnabled = false;
      // console.log(-(1 / samples) * this.canvasWidth);
      // this.renderingContext.drawImage(this.renderingContext.canvas, moveRate, 0);
      // this.renderingContext.globalCompositeOperation = 'source-over';

      this.renderingContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.renderingContext.lineWidth = 2;

      for (const wave of this.waves) {
        this.renderingContext.strokeStyle = wave.color;
        this.renderWave(this.canvasWidth, this.canvasHeight, this.renderingContext, wave.amplitude, wave.wavelength, this.time, samples);
      }

      this.renderingContext.strokeStyle = '#AB47BC';
      this.renderCombinedWave(this.canvasWidth, this.canvasHeight, this.renderingContext, this.waves, this.time, 1000);

      this.time += Math.PI * 0.5;
      requestAnimationFrame(renderLoop);
    };
    renderLoop();
  }

  renderWave(canvasWidth: number, canvasHeight: number, renderContext: CanvasRenderingContext2D,
              amplitude: number, wavelength: number, time: number, samples: number) {
    let priorNum = amplitude * Math.sin(2 * Math.PI * time / wavelength);
    for (let i = 1; i < samples; i++) {
      const newNum = amplitude * Math.sin(2 * Math.PI * ((i / samples) * canvasWidth + time) / wavelength);
      renderContext.beginPath();
      renderContext.moveTo(((i - 1) / samples) * canvasWidth, priorNum + (canvasHeight / 2));
      renderContext.lineTo((i / samples) * canvasWidth + 2, newNum + (canvasHeight / 2));
      renderContext.stroke();
      priorNum = newNum;
    }
  }

  renderQuickWave(canvasWidth: number, canvasHeight: number, renderContext: CanvasRenderingContext2D,
    amplitude: number, wavelength: number, time: number, samples: number, priorNum: number) { // Crazy fast wave drawing (with canvas shift)
      // const priorNum = amplitude * Math.sin(2 * Math.PI * ((samples - 2) / samples * canvasWidth + time) / wavelength);
      const newNum = amplitude * Math.sin(2 * Math.PI * ((samples - 1) / samples * canvasWidth + time) / wavelength);
      renderContext.beginPath();
      renderContext.moveTo(((samples - 2) / samples) * canvasWidth, priorNum + (canvasHeight / 2));
      renderContext.lineTo(((samples - 1) / samples) * canvasWidth, newNum + (canvasHeight / 2));
      renderContext.stroke();
      return newNum;
  }

  renderCombinedWave(
      canvasWidth: number,
      canvasHeight: number,
      renderContext: CanvasRenderingContext2D,
      waves: Wave[],
      time: number,
      samples: number) {
    let priorNum = 0;
    for (const wave of waves) {
      priorNum += wave.amplitude * Math.sin(2 * Math.PI * time / wave.wavelength);
    }

    for (let i = 1; i < samples; i++) {
      let newNum = 0;
      for (const wave of waves) {
        newNum += wave.amplitude * Math.sin(2 * Math.PI * ((i / samples) * canvasWidth + time) / wave.wavelength);
      }

      renderContext.beginPath();
      renderContext.moveTo(((i - 1) / samples) * canvasWidth, priorNum + (canvasHeight / 2));
      renderContext.lineTo((i / samples) * canvasWidth, newNum + (canvasHeight / 2));
      renderContext.stroke();
      priorNum = newNum;
    }
  }

  newWave() {
    this.waves.push({wavelength: 50, name: '', base: false, color: 'blue', amplitude: 50, editing: false, priorNum: 0});
    // const toneInfo = {frequency: }
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

  openSettings() {
    console.log('OpenSettings');
    this.settings.emit();
  }

  openHelp() {
    console.log('OpenHelp');
    this.help.emit();
  }

  playNote (frequency: number = 50): Tone {
    if (!this.currentTone) {
      this.currentTone = new Tone(this.audioCtx);
      this.currentTone.setFrequency(0);
      this.currentTone.setAmplitude(0);
      this.currentTone.start();
    }

    this.currentTone.setFrequency(frequency, 1, this.audioCtx.currentTime + 0.2);
    this.currentTone.setAmplitude(0.03, 1, 5);
    this.currentTone.setPan(0);

    return this.currentTone;
  }
}

import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { noteFreqMap } from '../../data/data';
import { Tone, Timber } from '../../../src/classes/note-utils';

interface Wave {
  amplitude: number;
  wavelength: number;
  frequency: number;
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

  @ViewChild('canvWrapper') canvasWrapper;
  @ViewChild('waveWrapper') waveWrapper;

  canvasWidth = 0;
  canvasHeight = 0;

  time: number;
  waves: Wave[] = [];
  harmonic: Timber[] = [];
  pressedKeys: number[] = [];
  baseWave: Wave;

  audioCtx: AudioContext = new ((<any>window).AudioContext || (<any>window).webkitAudioContext)();
  brickwallLimiter: any;

  noteIDCounter = 0;
  currentTone: Tone;
  menuOpen = true;

  currentNoteName = 'Silence';
  currentNoteFreq = '0';
  octave = 4;

  tones = [];

  stickyAmpTimeout: any;
  stickyFreqTimeout: any;

  fileMode = 'save';

  constructor() {
    this.brickwallLimiter = this.audioCtx.createDynamicsCompressor();
    this.brickwallLimiter.threshold.value = 0.0;
    this.brickwallLimiter.knee.value = 0.0;
    this.brickwallLimiter.ratio.value = 20;
    this.brickwallLimiter.attack.value = 0.005;
    this.brickwallLimiter.release.value = 0.050;
    this.brickwallLimiter.connect(this.audioCtx.destination);

    $(document).keydown( (event: any) => {
      const code = (event.keyCode ? event.keyCode : event.which);
      const char = String.fromCharCode(code).toLowerCase();

      if (char === 'q') {
        this.reset();
      }

      if (this.pressedKeys.indexOf(code) > -1) {
        return 0;
      } else {
        this.pressedKeys.push(code);
      }

      if (noteFreqMap.hasOwnProperty(char)) {
        this.currentNoteName = char.toUpperCase();
        this.currentNoteFreq = noteFreqMap[char][this.octave];
        const baseFrequency = noteFreqMap[char][this.octave];
        this.constructHarmonic(baseFrequency, 1);
      }

      if (+char) {
        this.octave = +char;
      }
    });

    $(document).keyup( (event: any) => {
      const code = (event.keyCode ? event.keyCode : event.which);
      const char = String.fromCharCode(code).toLowerCase();

      if (this.pressedKeys.indexOf(code) < 0) { // not in the list
        return 0;
      } else {
        this.pressedKeys.splice(this.pressedKeys.indexOf(code), 1);
      }

      if (noteFreqMap.hasOwnProperty(char)) {
        for (let i = 0; i < noteFreqMap[char].length; i++) {
          const baseFrequency = noteFreqMap[char][i];
          this.destroyHarmonic(baseFrequency);
        }

        try {
          const nodeIdx = String.fromCharCode(this.pressedKeys[this.pressedKeys.length - 1]).toLowerCase();
          this.currentNoteFreq = noteFreqMap[nodeIdx][this.octave];
          this.currentNoteName = nodeIdx.toUpperCase();
        } catch {
          this.currentNoteFreq = '0';
          this.currentNoteName = 'Silence';
        }
      }
    });
  }

  playMusic() {
    const notes = {
      1: {n: 'd', o: 4, t: 1},
      2: {n: 'd', o: 4, t: 2},
      3: {n: 'd', o: 4, t: 3},
      4: {n: 'g', o: 4, t: 4},
      10: {n: 'd', o: 5, t: 10},
      16: {n: 'c', o: 5, t: 16},
      17: {n: 'b', o: 4, t: 17},
      18: {n: 'a', o: 4, t: 18},
      19: {n: 'g', o: 5, t: 19},
      25: {n: 'd', o: 5, t: 25},
      28: {n: 'c', o: 5, t: 28},
      29: {n: 'b', o: 4, t: 29},
      30: {n: 'a', o: 4, t: 30},
      31: {n: 'g', o: 5, t: 31},
      36: {n: 'd', o: 5, t: 36},
      39: {n: 'c', o: 5, t: 39},
      40: {n: 'b', o: 4, t: 40},
      41: {n: 'c', o: 5, t: 41},
      42: {n: 'a', o: 4, t: 42},
      48: {n: 'z', o: 4, t: 48},
    };

    let incr = 0;
    let lastKey = 'Z';

    const bps = 8; // Beats per second

    const player = () => {
      incr++;
      if (notes[incr]) {
        let e = $.Event('keyup');
        e.which = lastKey.charCodeAt(0);
        $(document).trigger(e);

        setTimeout(() => {
          setTimeout(player, (1000 / bps) * 0.7);
          this.octave = notes[incr]['o'];
          e = $.Event('keydown');
          e.which = notes[incr]['n'].charCodeAt(0);
          $(document).trigger(e);
          lastKey = notes[incr]['n'];
        }, (1000 / bps) * 0.3);
      } else {
        setTimeout(player, 1000 / bps);
      }
    };

    player();
  }

  ngOnInit() {
    // const waves = JSON.parse(localStorage.getItem('waves'));
    const waves  = false;
    if (waves) {
      this.waves = JSON.parse(localStorage.getItem('waves'));
      this.baseWave = this.waves[0];
    } else {
      this.waves.push(
        {wavelength: 350, amplitude: 100, color: 'green', base: true,
        name: 'Base Frequency', editing: false, priorNum: 0, frequency: 100 / 350}
      );
      this.baseWave = this.waves[this.waves.length - 1];
    }

    this.gameCanvas = <HTMLCanvasElement>document.getElementById('rendering-canvas');

    this.renderingContext = this.gameCanvas.getContext('2d');
    this.time = 0;

    // Some examples:
    // this.renderingContext.fillRect(x, y, w, h)
    // https://www.w3schools.com/html/html5_canvas.asp

    const samples = 1000;
    const moveRate = -(1 / samples) * this.canvasWidth;
    // console.log(moveRate);
    const renderLoop = () => {
      this.canvasWidth = this.canvasWrapper.nativeElement.clientWidth;
      this.canvasHeight = this.canvasWrapper.nativeElement.clientHeight;
      this.gameCanvas.width = this.canvasWidth;
      this.gameCanvas.height = this.canvasHeight;

      // this.renderingContext.globalCompositeOperation = 'copy';
      // this.renderingContext.imageSmoothingEnabled = false;
      // console.log(-(1 / samples) * this.canvasWidth);
      // this.renderingContext.drawImage(this.renderingContext.canvas, moveRate, 0);
      // this.renderingContext.globalCompositeOperation = 'source-over';

      this.renderingContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

      this.renderingContext.strokeStyle = 'gray';
      this.renderGraphLines(this.canvasWidth, this.canvasHeight, this.renderingContext, 50);

      this.renderingContext.lineWidth = 1;
      for (const wave of this.waves) {
        if (wave.base) {
          this.renderingContext.strokeStyle = wave.color;
          this.renderWave(this.canvasWidth, this.canvasHeight, this.renderingContext, wave.amplitude, wave.wavelength, this.time, samples);
        } else {
          const freq = this.baseWave.frequency * (wave.frequency / 100);
          const wavelength = 100 / freq;
          const amplitude = (wave.amplitude / 100) * this.baseWave.amplitude;

          this.renderingContext.strokeStyle = wave.color;
          this.renderWave(this.canvasWidth, this.canvasHeight, this.renderingContext, amplitude, wavelength, this.time, samples);
        }
      }

      this.renderingContext.lineWidth = 4;
      this.renderingContext.strokeStyle = '#AB47BC';
      this.renderCombinedWave(this.canvasWidth, this.canvasHeight, this.renderingContext, this.waves, this.time, 1000);

      this.time += Math.PI * 0.5;
      requestAnimationFrame(renderLoop);
    };

    renderLoop();
    // this.playMusic();

    console.log($('.slider'));
  }

  renderGraphLines(canvasWidth: number, canvasHeight: number, renderContext: CanvasRenderingContext2D,
    distBetweenLines: number) {
    for (let i = 1; i < canvasWidth / distBetweenLines; i++) {
      renderContext.beginPath();
      renderContext.moveTo(i * distBetweenLines, 0);
      renderContext.lineTo(i * distBetweenLines, canvasHeight);
      renderContext.stroke();
    }
    for (let i = 1; i < canvasHeight / distBetweenLines; i++) {
      renderContext.beginPath();
      renderContext.moveTo(0, i * distBetweenLines);
      renderContext.lineTo(canvasWidth, i * distBetweenLines);
      renderContext.stroke();
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

  renderCombinedWave(
      canvasWidth: number,
      canvasHeight: number,
      renderContext: CanvasRenderingContext2D,
      waves: Wave[],
      time: number,
      samples: number) {

    let priorNum = 0;
    for (const wave of waves) {
      let freqT;
      let wavelengthT;
      if (wave.base) {
        freqT = this.baseWave.frequency;
        wavelengthT = 100 / freqT;
      } else {
        freqT = this.baseWave.frequency * (wave.frequency / 100);
        wavelengthT = 100 / freqT;
      }

      // console.log(wave);
      const amplitude = (wave.amplitude / 100) * this.baseWave.amplitude;
      priorNum += (amplitude) * Math.sin(2 * Math.PI * time / wavelengthT);
    }

    for (let i = 1; i < samples; i++) {
      let newNum = 0;
      for (const wave of waves) {
        let freqT;
        let wavelengthT;
        if (wave.base) {
          freqT = this.baseWave.frequency;
          wavelengthT = 100 / freqT;
        } else {
          freqT = this.baseWave.frequency * (wave.frequency / 100);
          wavelengthT = 100 / freqT;
        }

        const freq = this.baseWave.frequency * (wave.frequency / 100);
        const wavelength = 100 / freq;
        const amplitude = (wave.amplitude / 100) * this.baseWave.amplitude;

        newNum += (amplitude) * Math.sin(2 * Math.PI * ((i / samples) * canvasWidth + time) / wavelengthT);
      }

      renderContext.beginPath();
      renderContext.moveTo(((i - 1) / samples) * canvasWidth, priorNum + (canvasHeight / 2));
      renderContext.lineTo((i / samples) * canvasWidth, newNum + (canvasHeight / 2));
      renderContext.stroke();
      priorNum = newNum;
    }
  }

  newWave() {
    this.waves.push(
      {wavelength: 2, name: '', base: false, color: 'blue',
      amplitude: 50, editing: false, priorNum: 0, frequency: 100}
    );
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

  // normalizeAmplitudes() { // Super inefficient, may need to find better way of doing this.
  //   let totalAmplitude = 1;
  //   console.log('Normalizing Amplitudes');
  //   this.waves.forEach(wave => {
  //     if (wave.base) {
  //       totalAmplitude += 1;
  //     } else {
  //       totalAmplitude += (wave.amplitude / 100);
  //     }
  //   });
  //   this.waves.forEach(wave => {
  //     wave.amplitude = wave.amplitude / totalAmplitude;
  //   });
  // }

  constructHarmonic(baseFrequency: number, baseAmplitude: number) { // base frequencies depend on the current note being played
    const currentTimber = new Timber();
    currentTimber.setId(baseFrequency); // Each note has a unique bass frequency, this can be used as an ID.
    this.waves.forEach(wave => {
      let frequency;
      let amplitude;
      if (wave.base) {
        frequency = baseFrequency;
        amplitude = baseAmplitude / (this.waves.length * this.pressedKeys.length + 2);
        console.log('Base amplitude is: ', amplitude);
      } else {
        frequency = (wave.frequency / 100) * baseFrequency; // Frequency is based on the frequency of the base.
        console.log('New frequency is: ', frequency);
        amplitude = (wave.amplitude / 100) * baseAmplitude / (this.waves.length * this.pressedKeys.length + 2);
        console.log('New Amplitude is', amplitude);
      }
      // console.log(amplitude);

      const tone = new Tone(this.audioCtx, this.brickwallLimiter);
      tone.setFrequency(frequency);
      tone.setAmplitude(amplitude);
      tone.setPan(0);

      currentTimber.addTone(this.audioCtx, tone);
    });
    currentTimber.play();
    this.harmonic.push(currentTimber);
  }

  destroyHarmonic(baseFrequency: number) {
    this.harmonic.forEach((timber, idx) => {
      if (timber.getId() === baseFrequency) { // Check if it is the one we want to turn off
        timber.stop(this.audioCtx.currentTime);
        this.harmonic.splice(idx, 1);
        // console.log('Splicing', this.harmonic);
      }
    });
  }

  playNote (frequency: number = 50, id?: number): Tone {
    const tone = new Tone(this.audioCtx, this.brickwallLimiter);

    tone.setFrequency(frequency, 1, this.audioCtx.currentTime + 0.2);
    tone.setAmplitude(0.03, 1, 5);
    tone.setPan(0);

    return tone;
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

  reset() {
    console.log('reset');
    this.audioCtx.close();
    this.audioCtx = new ((<any>window).AudioContext || (<any>window).webkitAudioContext)();
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
}

import { Component, OnInit, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { Wave } from '../wave-manager/waveManager';

@Component({
  selector: 'app-tone-graph',
  templateUrl: './tone-graph.component.html',
  styleUrls: ['./tone-graph.component.sass']
})
export class ToneGraphComponent implements OnInit {
  @Input() baseWave;
  @Input() waves;

  gameCanvas: HTMLCanvasElement;
  renderingContext: CanvasRenderingContext2D;
  @ViewChild('canvWrapper') canvasWrapper;
  @ViewChild('waveWrapper') waveWrapper;

  canvasWidth = 0;
  canvasHeight = 0;

  time: number;

  ngOnInit() {
    this.gameCanvas = <HTMLCanvasElement>document.getElementById('rendering-canvas');

    this.renderingContext = this.gameCanvas.getContext('2d');
    this.time = 0;
    // Some examples:
    // this.renderingContext.fillRect(x, y, w, h)
    // https://www.w3schools.com/html/html5_canvas.asp
    
    this.renderingContext.fillRect(0, 0, 100, 100);

    const samples = 100;
    // const moveRate = -(1 / samples) * this.canvasWidth;
    // console.log(moveRate);
    const renderLoop = () => {
      this.canvasWidth = this.canvasWrapper.nativeElement.clientWidth;
      this.canvasHeight = this.canvasWrapper.nativeElement.clientHeight;
      this.gameCanvas.width = this.canvasWidth;
      this.gameCanvas.height = this.canvasHeight;

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
}

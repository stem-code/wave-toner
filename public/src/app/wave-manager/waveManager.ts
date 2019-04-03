import { Tone, Timber } from '../../../src/classes/note-utils';
import { AudioManager } from '../audio-manager/audioManager';

// Purpose:
// Store all the current waves that are being played in memory.
// Allow for the creation of sound based on the waves in memory.

export interface Wave {
  amplitude: number;
  wavelength: number;
  frequency: number;
  color: string;
  base: boolean;
  name: string;
  editing: boolean;
  priorNum: number;
}

export class WaveManager {
  audioManager: AudioManager;

  waves: Wave[] = [];
  harmonic: Timber[] = [];

  baseFrequency: number;

  constructor() {
    this.audioManager = new AudioManager();
  }

  public setBaseFrequency(baseFreq: number) {
    this.baseFrequency = baseFreq;
  }

  public setWaves(waves: Wave[]) {
    this.waves = waves;
  }

  public clearWaves() {
    this.waves = [];
  }

  public returnWaves() {
    return this.waves;
  }

  public constructHarmonic(baseFrequency: number, baseAmplitude: number) { // base frequencies depend on the current note being played
    this.audioManager.userGesture();
    // console.log(this);
    const currentTimber = new Timber(this.audioManager);
    currentTimber.setId(baseFrequency); // Each note has a unique bass frequency, this can be used as an ID.
    this.waves.forEach(wave => {
      let frequency;
      let amplitude;

      if (wave.base) {
        frequency = baseFrequency;
        amplitude = baseAmplitude / (this.waves.length * this.harmonic.length + 2); // The total amount of waves
        // console.log('Base amplitude is: ', amplitude);
      } else {
        frequency = (wave.frequency / 100) * baseFrequency; // Frequency is based on the frequency of the base.
        // console.log('New frequency is: ', frequency);
        amplitude = (wave.amplitude / 100) * baseAmplitude / (this.waves.length * this.harmonic.length + 2);
        // console.log('New Amplitude is', amplitude);
      }

      const tone = new Tone(this.audioManager);
      tone.setFrequency(frequency);
      tone.setAmplitude(amplitude);
      tone.setPan(0);

      currentTimber.addTone(tone);
    });
    currentTimber.play();
    this.harmonic.push(currentTimber);
    // console.log('------------------------------------------------------------');
    // console.log(this.harmonic);
  }

  destroyHarmonic(baseFrequency: number) {
    this.harmonic.forEach((timber, idx) => {
      if (timber.getId() === baseFrequency) { // Check if it is the one we want to turn off
        timber.stop(this.audioManager.getAudioCtx().currentTime);
        this.harmonic.splice(idx, 1);
        // console.log('Splicing', this.harmonic);
      }
    });
  }

  public getAudioManager(): AudioManager {
    return this.audioManager;
  }
}

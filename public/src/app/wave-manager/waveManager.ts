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

    // const currentTimber = new Timber(this.audioManager);
    // const tone = new Tone(this.audioManager);
    // tone.setFrequency(300);
    // tone.setAmplitude(0.1);
    // tone.setPan(0);

    // currentTimber.addTone(tone);
    // currentTimber.play();
  }

  public prepSounds() {

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

  public updateHarmonic(harmonic: Timber, baseFrequency: number, baseAmplitude: number) {
    // Always align the number of tones with the number of waves
    // Because each tone will be playing a separate wave to form a harmonic

    while (harmonic.getTones().length < this.waves.length) {
      harmonic.addTone(new Tone(this.audioManager));
    }
    while (harmonic.getTones().length > this.waves.length) {
      harmonic.popTone(); // remove any tones that are extra (unnecessary)
    }

    const tones = harmonic.getTones();

    this.waves.forEach((wave, idx) => {
      let frequency;
      let amplitude;

      if (wave.base) {
        frequency = baseFrequency;
        amplitude = baseAmplitude / ((this.waves.length * (frequency / 200 + 1))); // divide by the total amount of waves
        // amplitude = baseAmplitude / 100;
        // console.log('Base amplitude is: ', amplitude);
      } else {
        frequency = (wave.frequency / 100) * baseFrequency; // Frequency is based on the frequency of the base.
        // console.log('New frequency is: ', frequency);
        amplitude = (wave.amplitude / 100) * baseAmplitude / (this.waves.length * (frequency / 200 + 1));
        // amplitude = ((wave.amplitude / 100) * baseAmplitude) / 100;
        // console.log('New Amplitude is', amplitude);
      }

      const tone = tones[idx];
      tone.setFrequency(frequency);
      tone.setAmplitude(amplitude, 0, 0.3);
      tone.setPan(0);
    });

    harmonic.setId(baseFrequency);
  }

  public constructHarmonic(baseFrequency: number = 0, baseAmplitude: number = 0) { // base frequencies depend on current note being played
    this.audioManager.userGesture();

    const currentTimber = new Timber(this.audioManager);
    // currentTimber.setId(baseFrequency); // Each note has a unique bass frequency, this can be used as an ID.

    if (baseFrequency && baseAmplitude) {
      this.updateHarmonic(currentTimber, baseFrequency, baseAmplitude);
    }

    currentTimber.onPlay = () => {
      this.harmonic.push(currentTimber);
      // console.log('Appening to list of harmonics');
    };

    return currentTimber;
  }

  destroyHarmonic(baseFrequency: number) {
    this.harmonic.forEach((timber, idx) => {
      if (timber.getId() === baseFrequency) { // Check if it is the one we want to turn off
        timber.stop(this.audioManager.getAudioCtx().currentTime);
        this.harmonic.splice(idx, 1);
        timber.setAvailibility(true);
      }
    });
  }

  public getAudioManager(): AudioManager {
    return this.audioManager;
  }
}

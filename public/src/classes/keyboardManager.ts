import * as $ from 'jquery';
import { AudioManager } from '../app/audio-manager/audioManager';

export class KeyboardManager {
  pressedKeys: number[] = [];
  octave: number;

  noteFreqMap;
  setCurrentNoteInfo;
  waveManager;
  setDisplayOctave;

  // noteHarmonics = {};
  noteHarmonics = [];

  constructor(noteFreqMap, setCurrentNoteInfo, setOctave, waveManager, octave: number = 2) {
    this.octave = octave;
    this.noteFreqMap = noteFreqMap;
    this.setCurrentNoteInfo = setCurrentNoteInfo;
    this.waveManager = waveManager;
    this.setDisplayOctave = setOctave;

    $(document).keydown( (event: any) => {
      // console.log('Keydown');
      const code = (event.keyCode ? event.keyCode : event.which); // Get the keycode (key number)
      const char = String.fromCharCode(code).toLowerCase(); // Convert this keycode into the corresponding char value

      if (this.pressedKeys.indexOf(code) > -1) { // Check if the key is already being pressed
        return 0;
      } else { // Otherwise, we need to add it to the list of pressed keys
        // console.log('Adding to the list of pressed keys');
        this.pressedKeys.push(code);
      }

      if (+char) { // If the character happens to be a number (num keys)
        this.octave = +char; // set the current octave to the key pressed
        setOctave(this.octave);
      }

      this.playNote(char);
    });

    $(document).keyup( (event: any) => {
      const code = (event.keyCode ? event.keyCode : event.which);
      const char = String.fromCharCode(code).toLowerCase();

      if (this.pressedKeys.indexOf(code) < 0) { // not in the list
        return 0;
      } else {
        this.pressedKeys.splice(this.pressedKeys.indexOf(code), 1); // Remove it from the list of pressed keys
      }

      if (noteFreqMap.hasOwnProperty(char)) {
        this.stopNote(char);

        try {
          // now that the current key has been depressed, there is a slight chance that its information was being shown to the user
          // We will therefore nominate another note in our pressed keys to have its information displayed
          const nodeIdx = String.fromCharCode(this.pressedKeys[this.pressedKeys.length - 1]).toLowerCase();
          setCurrentNoteInfo(nodeIdx.toUpperCase(), noteFreqMap[nodeIdx][this.octave]);
        } catch {
          setCurrentNoteInfo('Silence', '0');
        }
      }
      waveManager.getAudioManager().userGesture();
    });

    $(document).mouseup( (event: any) => {
      waveManager.getAudioManager().userGesture();
    });
  }

  prepSounds() {
    console.log('Prepping Sounds');
    this.noteHarmonics = [];
    for (let i = 0; i < 12; i++) { // 7 "parking spots"
      const currentHarmonic = this.waveManager.constructHarmonic();
      this.noteHarmonics.push(currentHarmonic);
      currentHarmonic.play(0);
    }
  }

  setOctave(o) {
    this.octave = o;
  }


  playNote(char, time: number = 0) {
    if (!time) {
      time = this.waveManager.audioManager.getAudioCtx().currentTime;
      // console.log('Time switched to', time);
    }

    // console.log('Playing note');
    char = char.toLowerCase();
    if (this.noteFreqMap.hasOwnProperty(char)) { // Check if we have a current frequency for the note.
      const currentNoteName = char.toUpperCase(); // Adjust the variables that we will display to the user (see HTML)
      const baseFrequency = this.noteFreqMap[char][this.octave];
      this.setCurrentNoteInfo(currentNoteName, baseFrequency);

      for (const harmonic of this.noteHarmonics) {
        if (harmonic.getAvailibility()) { // if it is available
          // console.log('Found an available spot');
          // console.log(this.noteHarmonics.indexOf(harmonic));
          harmonic.setAvailibility(false);
          this.waveManager.updateHarmonic(harmonic, baseFrequency, 1, time);
          return;
        }
      }

      console.log('No More parking');

    } else {
      console.log('NOT FOUND', char);
    }
  }

  stopNote(char) {
    // console.log('Launching stop mechanism');
    char = char.toLowerCase();
    for (let i = 0; i < this.noteFreqMap[char].length; i++) { // destroy all matching notes on all octaves
      const baseFrequency = this.noteFreqMap[char][i];
      this.waveManager.destroyHarmonic(baseFrequency, this.noteHarmonics); // destroy the frequency, use base frequency as identifier
    }
  }
}

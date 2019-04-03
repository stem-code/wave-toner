import * as $ from 'jquery';
import { AudioManager } from '../app/audio-manager/audioManager';

export class KeyboardManager {
  pressedKeys: number[] = [];
  octave: number;

  constructor(noteFreqMap, setCurrentNoteInfo, setOctave, waveManager, octave: number = 2) {
    this.octave = octave;

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

      if (noteFreqMap.hasOwnProperty(char)) { // Check if we have a current frequency for the note.
        const currentNoteName = char.toUpperCase(); // Adjust the variables that we will display to the user (see HTML)
        const baseFrequency = noteFreqMap[char][this.octave];
        setCurrentNoteInfo(currentNoteName, baseFrequency);

        // console.log('Constructing Harmonic with the WaveManager');
        waveManager.constructHarmonic(baseFrequency, 1);
      }

      if (+char) { // If the character happens to be a number (num keys)
        this.octave = +char; // set the current octave to the key pressed
        setOctave(this.octave);
      }
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
        for (let i = 0; i < noteFreqMap[char].length; i++) {
          const baseFrequency = noteFreqMap[char][i];
          waveManager.destroyHarmonic(baseFrequency); // destroy the frequency, using its unique base frequency as an identifier
        }

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

  setOctave(o) {
    this.octave = o;
  }
}

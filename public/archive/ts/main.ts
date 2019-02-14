/// <reference path="../lib/jquery.d.ts"/>

import { noteFreqMap } from '../../src/data/data';


let audioCtx: AudioContext;
let oscillator: OscillatorNode;
let oscillator2: OscillatorNode;

let isPlaying = false;

function playNote(frequency: number = 50) {
    isPlaying = true;
    if (!audioCtx) {
        audioCtx = new ((<any>window).AudioContext || (<any>window).webkitAudioContext)();
    }

    oscillator = audioCtx.createOscillator();
    const panNode: StereoPannerNode = audioCtx.createStereoPanner();
    const gain = audioCtx.createGain(); // crete an amplitude controller
    gain.gain.value = 0.1; // lower the volume (so we don't destroy people's ears)
    panNode.pan.value = -1;

    oscillator.type = 'sine';
    oscillator.frequency.value = frequency; // value in hertz
    oscillator.connect(gain);
    gain.connect(panNode);
    panNode.connect(audioCtx.destination);

    // create second oscillator (testing purposes), code repetition is bad.
    oscillator2 = audioCtx.createOscillator();
    const panNode2 = audioCtx.createStereoPanner(); // stereo controller for left and right balance
    const gain2 = audioCtx.createGain(); // crete an amplitude controller
    gain2.gain.value = 0.1; // lower the volume (so we don't destroy people's ears)
    panNode2.pan.value = 1;

    oscillator2.type = 'sine';
    oscillator2.frequency.value = frequency; // value in hertz
    oscillator2.connect(gain2);
    gain2.connect(panNode2);
    panNode2.connect(audioCtx.destination);


    oscillator.start();
    oscillator2.start();
}

function stopNote() {
    isPlaying = false;
    oscillator.stop(audioCtx.currentTime);
    oscillator2.stop(audioCtx.currentTime);
}

function processKeyEvent() {
    if (isPlaying) {
        stopNote();
    }
}

const keys = Object.keys(noteFreqMap);

document.onkeydown = function() {
    let currOctave = 0;
    let direction = 1;
    let currNote = 0;
    playNote(noteFreqMap[keys[0]][0]);
    const octavePlayer = () => {
        const notePlayer = () => {
            console.log('Playing ', keys[currNote], ' at octave ', currOctave);
            oscillator.frequency.value = noteFreqMap[keys[currNote]][currOctave];
            oscillator2.frequency.value = noteFreqMap[keys[currNote]][currOctave];

            setTimeout(function() {
                if (currNote + direction < 7 && currNote + direction >= 0) {
                    currNote += direction;
                    notePlayer();
                } else {
                    if ( currOctave + direction > 6 ||  currOctave + direction < 1) {
                        direction *= -1;
                        currNote = (-1 * (6 * direction - 6) / 2) + (1 * direction);
                    } else {
                        currNote = -1 * (6 * direction - 6) / 2;
                    }
                    currOctave += direction;


                    octavePlayer();
                }
            }, 400);
        };
        notePlayer();
    };
    octavePlayer();
};

document.getElementById('playnote').onclick = function() {
    console.log('Beep');
    playNote();
};

document.getElementById('stopnote').onclick = function() {
    console.log('EndBeep');
    stopNote();
};

const hertzElement = document.getElementById('hertz');
const hertzElement2 = document.getElementById('hertz2');
$('myRange').change(function() {
    if (oscillator) {
        const freq = this.value;
        oscillator.frequency.value = $(this).val();
    }
    hertzElement.innerHTML = this.value;
});

$('myRange2').change(function() {
    if (oscillator) {
        const freq2 = this.value;
        oscillator.frequency.value = $(this).val();
    }
    hertzElement2.innerHTML = this.value;
});

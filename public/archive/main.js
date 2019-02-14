var freq = 50;
var freq2 = 50;
var audioCtx;
var oscillator;
var oscillator2;

var isPlaying = false;

var noteFreqMap = {
                    'c': [16.35, 32.70, 65.41, 130.81, 261.63, 523.25, 1046.50],
                    // 'c#':[17.32, 34.65, 69.30, 138.59, 277.18, 554.37, 1108.73],
                    // 'db': [17.32, 34.65, 69.30, 138.59, 277.18, 554.37, 1108.73],
                    'd': [18.35, 36.71, 73.42, 146.83, 293.66, 587.33, 1174.66],
                    // 'd#': [19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51],
                    // 'eb': [19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51],
                    'e': [20.60, 41.20, 82.41, 164.81, 329.63, 659.25, 1318.51],
                    'f': [21.83, 43.65, 87.31, 174.61, 349.23, 698.46, 1396.91],
                    // 'f#':[23.12, 46.25, 92.50, 185, 369.99, 739.99, 1479.98],
                    // 'gb': [23.12, 46.25, 92.50, 185, 369.99, 739.99, 1479.98],
                    'g': [24.50, 49, 98, 196, 392, 783.99, 1567.98],
                    // 'g#': [25.96, 51.91, 103.83, 207.65, 415.30, 830.61, 1661.22],
                    // 'ab': [25.96, 51.91, 103.83, 207.65, 415.30, 830.61, 1661.22],
                    'a': [27.50, 55, 110, 220, 440, 880, 1760],
                    // 'a#': [29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66],
                    // 'bb': [29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66],
                    'b': [30.87, 61.74, 123.47, 246.94, 493.88, 987.77, 1975.53]
}

function playNote(frequency) {
    isPlaying = true;
    if (!audioCtx){
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    oscillator = audioCtx.createOscillator();
    var panNode = audioCtx.createStereoPanner();
    let gain = audioCtx.createGain(); // crete an amplitude controller 
    gain.gain.value = 0.1; // lower the volume (so we don't destroy people's ears)
    panNode.pan.value = -1;

    oscillator.type = 'sine';
    oscillator.frequency.value = frequency; // value in hertz
    oscillator.connect(gain);
    gain.connect(panNode);
    panNode.connect(audioCtx.destination);

    // create second oscillator (testing purposes), code repetition is bad.
    oscillator2 = audioCtx.createOscillator();
    var panNode2 = audioCtx.createStereoPanner(); // stereo controller for left and right balance
    let gain2 = audioCtx.createGain(); // crete an amplitude controller
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

function stopNote(){
    isPlaying = false;
    oscillator.stop(audioCtx.currentTime);
    oscillator2.stop(audioCtx.currentTime);
}

function processKeyEvent() {
    if (isPlaying) {
        stopNote();
    }
}

let keys = Object.keys(noteFreqMap);

document.onkeydown = function(){
    let currOctave = 0;
    let direction = 1;
    let currNote = 0;
    playNote(noteFreqMap[keys[0]][0]);
    let octavePlayer = () => {
        let notePlayer = () => {
            console.log("Playing ", keys[currNote], " at octave ", currOctave);
            oscillator.frequency.value = noteFreqMap[keys[currNote]][currOctave];
            oscillator2.frequency.value = noteFreqMap[keys[currNote]][currOctave];

            setTimeout(function(){
                if (currNote+direction < 7 && currNote+direction >= 0){
                    currNote += direction;
                    notePlayer();
                } else { 
                    if ( currOctave + direction > 6 ||  currOctave + direction < 1){
                        direction *= -1;
                        currNote = (-1 * (6 * direction - 6)/2) + (1 * direction);
                    } else {
                        currNote = -1 * (6 * direction - 6)/2;
                    }
                    currOctave += direction;


                    octavePlayer();
                }
            }, 400);
        }
        notePlayer();
    }
    octavePlayer();
}

document.getElementById("playnote").onclick = function(){
    console.log("Beep");
    playNote();
}

document.getElementById("stopnote").onclick = function(){
    console.log("EndBeep");
    stopNote();
}

var hertzElement = document.getElementById("hertz");
var hertzElement2 = document.getElementById("hertz2");
document.getElementById("myRange").oninput = function() {
    if (oscillator){
        freq = this.value;
        oscillator.frequency.value = this.value;
    }
    hertzElement.innerHTML = this.value;
}

document.getElementById("myRange2").oninput = function() {
    if (oscillator2){
        freq2 = this.value;
        oscillator2.frequency.value = this.value;
    }
    hertzElement2.innerHTML = this.value;
}

// document.onkeydown = function(){
//     processKeyEvent();
// }
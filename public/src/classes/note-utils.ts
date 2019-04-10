import { AudioManager } from 'src/app/audio-manager/audioManager';

// About the Tone Class
// A Tone is a single sound, it's frequency, volume, and stereo balance can vary over time.
// Events are added to the Tone's timeline to specify when settings (volume, frequency, stereo) should be changed
// When adding events to the timeline, the time at which the tone should start playing, how long it should ramp, etc. should be inputted
// Calling the start method triggers this timeline, and will immediately start playing all the settings it was given
// This is meant to be well-optimized, fast, and flexible
type timelineType = 'frequency' | 'amplitude' | 'pan';

let HighResolutionTimer = window['HighResolutionTimer'] = window['HighResolutionTimer'] || (function() {
    let HighResolutionTimer = function(options) {
      this.timer = false;
      this.total_ticks = 0;

      this.start_time = undefined;
      this.current_time = undefined;
      this.duration = (options.duration) ? options.duration : 1000;
      this.callback = (options.callback) ? options.callback : function() {};

      this.run = function() {
        this.current_time = Date.now();
        if (!this.start_time) { this.start_time = this.current_time; }

        this.callback(this);

        const nextTick = this.duration - (this.current_time - (this.start_time + (this.total_ticks * this.duration) ) );
        this.total_ticks++;

        (function(i) {
          i.timer = setTimeout(function() {
            i.run();
          }, nextTick);
        }(this));

        return this;
      };

      this.stop = function() {
        clearTimeout(this.timer);
        return this;
      };

      return this;
    };

    return HighResolutionTimer;
  }());

//   var _timer = HighResolutionTimer({
//     duration: 1000,
//     callback: function(timer) {
//       var hours = Math.floor( ( ( (1000 / timer.duration) * timer.total_ticks) / 60) / 24) % 24;
//       var minutes = Math.floor( ( (1000 / timer.duration) * timer.total_ticks) / 60) % 60;
//       var seconds = ( (1000 / timer.duration) * timer.total_ticks) % 60;
//       console.log(hours, minutes, seconds);
//     }
// });

export class Tone {
    private oscillator: OscillatorNode;
    private panner: StereoPannerNode;
    private gain: GainNode;
    private audioCtx: AudioContext;

    private timeline: {[index: number]: any} = {};
    private timelineId = 1; // increment ID for different tone timeline events

    private gainValue = 0;
    private hasStarted = false;

    constructor(audioManager: AudioManager) {
        this.audioCtx = audioManager.getAudioCtx();

        this.oscillator = <OscillatorNode>this.audioCtx.createOscillator();
        this.panner = <StereoPannerNode>this.audioCtx.createStereoPanner();
        this.gain = <GainNode>this.audioCtx.createGain();

        this.oscillator.connect(this.gain);
        this.gain.connect(this.panner);
        this.panner.connect(audioManager.currentConnectorNode);
    }

    stop(time: number, clear: boolean) {
        // console.log(time.toFixed(2));
        this.oscillator.frequency.cancelScheduledValues(0); // immediately cancel all scheduled values
        this.gain.gain.cancelScheduledValues(0);
        this.panner.pan.cancelScheduledValues(0);

        if (navigator.appName !== 'Netscape') {
            this.gain.gain.setTargetAtTime(0, time, 0.015);
        } else {
            // this.gain.gain.linearRampToValueAtTime(0, time + 0.03);
            this.gain.gain.setTargetAtTime(0, time + 0.03, 0.02);
            // this.gain.gain.linearRampToValueAtTime(0, time + 0.05);
            // this.gain.gain.setValueAtTime(0.0001, time);
        }

        if (clear) {
            setTimeout(() => {
                this.clear();
            }, 500);
        }
    }

    prepTimeline() { // Run through timeline and add all necessary events
        Object.keys(this.timeline).forEach((timelineKey: string) => {
            if (!this.timeline.hasOwnProperty(timelineKey)) { return; }
            const timelineEvent = this.timeline[timelineKey];
            if (timelineEvent.type === 'frequency') {
                this.setFrequency(timelineEvent.value, this.audioCtx.currentTime + timelineEvent.time, timelineEvent.rampTime);
            } else if (timelineEvent.type === 'amplitude') {
                this.setAmplitude(timelineEvent.value, this.audioCtx.currentTime + timelineEvent.time, timelineEvent.rampTime);
            } else if (timelineEvent.type === 'pan') {
                this.setPan(timelineEvent.value, this.audioCtx.currentTime + timelineEvent.time, timelineEvent.rampTime);
            }
        });
    }

    start(time: number = 0) {
        console.log(time);
        if (!time) {
            time = this.audioCtx.currentTime;
        }
        // console.log('End time = ', Date.now());
        // console.log(time);
        // console.log(this.audioCtx.currentTime);
        if (!this.hasStarted) {
            this.oscillator.start(time);
        }
        this.hasStarted = true;

        // this.gain.gain.setValueAtTime(0, 0);

        if (navigator.appName !== 'Netscape') {
            this.gain.gain.setTargetAtTime(this.gainValue, time, 0.015);
        } else {
            // this.gain.gain.exponentialRampToValueAtTime(this.gainValue, time + 0.3);
            // this.gain.gain.linearRampToValueAtTime(this.gainValue, time + 0.05);
            // this.gain.gain.setValueAtTime(this.gainValue, time);
            this.gain.gain.setTargetAtTime(this.gainValue, time + 0.03, 0.02);
        }
    }

    clear() {
        // console.log('Goodbye!');
        this.oscillator.stop();
        this.oscillator.disconnect();
        this.gain.disconnect();
        this.panner.disconnect();
        delete(this.oscillator);
        delete(this.panner);
        delete(this.gain);
    }

    addTimelineEvent(type: timelineType, value: number, time: number = 0, rampTime: number = 0) {
        this.timeline[++this.timelineId] = {type, value, time, rampTime};
        return this.timelineId;
    }

    deleteTimeLineEvent(id: number) {
        delete this.timeline[id];
    }

    setFrequency(frequency: number, time: number = 0, rampTime: number = 0) { // ramptime specifies how long it should transition
        if (rampTime > 0) {
            setTimeout(() => {
                this.oscillator.frequency.linearRampToValueAtTime(frequency, rampTime);
            }, time);
        } else {
            this.oscillator.frequency.setValueAtTime(frequency, time);
        }
    }

    setAmplitude(amplitude: number, time: number = 0, rampTime: number = 0) { // Volume
        // console.log('Setting amplitude');
        // console.log(amplitude, time, rampTime);
        // console.log('-----------------------------------');
        this.gainValue = amplitude;
        if (rampTime > 0) {
            setTimeout(() => {
                this.gain.gain.linearRampToValueAtTime(amplitude, rampTime);
            }, time);
        } else {
            this.gain.gain.setValueAtTime(amplitude, time);
        }
    }

    setPan(pan: number, time: number = 0, rampTime: number = 0) { // Stereo sound (Left and Right). Must be between -1 and 1.
        if (rampTime > 0) {
            setTimeout(() => {
                this.panner.pan.linearRampToValueAtTime(pan, rampTime);
            }, time);
        } else {
            this.panner.pan.setValueAtTime(pan, time);
        }
    }
}

export class Timber { // Combine multiple notes along with  to make more realistic sound
    audioCtx: AudioContext;
    tones: Tone[];
    id: number;
    preppedTones: Tone[] = [];

    audioManager: AudioManager;

    available = true;

    public onPlay;

    constructor(audioManager: AudioManager, ...notes: Tone[]) {
        this.tones = notes;
        this.audioManager = audioManager;
        this.audioCtx = audioManager.getAudioCtx();
    }

    addTone( tone: Tone) { // Add tone to make timber more complex
        this.tones.push(tone);
    }

    play(time: number) {
        // console.log('Play');
        if (this.onPlay) {
            this.onPlay();
        }

        this.tones.forEach(tone => {
            tone.prepTimeline();
            tone.start(time);
        });
    }

    stop(time?: number) {
        if (!time) {
            time = this.audioManager.getAudioCtx().currentTime;
        }

        this.tones.forEach(tone => {
            // tone.stop(time, true);
            tone.stop(time, false);
        });
    }

    setId(id: number) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    getTones() {
        return this.tones;
    }

    popTone() {
        this.tones.pop();
    }

    setAvailibility(availibility: boolean) {
        this.available = availibility;
    }
    getAvailibility() {
        return this.available;
    }
}

// About the Tone Class
// A Tone is a single sound, it's frequency, volume, and stereo balance can vary over time.
// Events are added to the Tone's timeline to specify when settings (volume, frequency, stereo) should be changed
// When adding events to the timeline, the time at which the tone should start playing, how long it should ramp, etc. should be inputted
// Calling the start method triggers this timeline, and will immediately start playing all the settings it was given
// This is meant to be well-optimized, fast, and flexible
type timelineType = 'frequency' | 'amplitude' | 'pan';
// let preppedTones =

export class Tone {
    private oscillator: OscillatorNode;
    private panner: StereoPannerNode;
    private gain: GainNode;
    private audioCtx: AudioContext;

    private timeline: {[index: number]: any} = {};
    private timelineId = 1; // increment ID for different tone timeline events

    private gainValue = 0;

    constructor(audioCtx, connectorNode) {
        this.audioCtx = audioCtx;

        this.oscillator = <OscillatorNode>this.audioCtx.createOscillator();
        this.panner = <StereoPannerNode>this.audioCtx.createStereoPanner();
        this.gain = <GainNode>this.audioCtx.createGain();

        this.oscillator.connect(this.gain);
        this.gain.connect(this.panner);
        this.panner.connect(connectorNode);
    }

    stop(time: number, clear: boolean) {
        // console.log(time.toFixed(2));
        this.oscillator.frequency.cancelScheduledValues(0); // immediately cancel all scheduled values
        this.gain.gain.cancelScheduledValues(0);
        this.panner.pan.cancelScheduledValues(0);
        if (navigator.appName !== 'Netscape') {
            this.gain.gain.setTargetAtTime(0, time, 0.015);
        } else {
            this.gain.gain.linearRampToValueAtTime(0, time + 0.1);
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
        this.gain.gain.setValueAtTime(0, 0);
        this.oscillator.start(time);
        if (navigator.appName !== 'Netscape') {
            this.gain.gain.setTargetAtTime(this.gainValue, time, 0.015);
        } else {
            this.gain.gain.linearRampToValueAtTime(this.gainValue, time + 0.1);
        }
        // this.gain.gain.setTargetAtTime(this.gainValue, time, 0.1);
        // console.log('starting oscillators');
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

    constructor(...notes: Tone[]) {
        this.tones = notes;
    }

    addTone(audioCtx: AudioContext, tone: Tone) { // Add tone to make timber more complex
        this.audioCtx = audioCtx;
        this.tones.push(tone);
    }

    play() {
        this.tones.forEach(tone => {
            tone.prepTimeline();
            tone.start();
        });
    }

    stop(time: number) {
        this.tones.forEach(tone => {
            tone.stop(time, true);
        });
    }

    setId(id: number) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
}

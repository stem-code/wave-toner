class TimeFrame {
    timestamp: number;
    frequency: number;
    gain: number;
    pan: number;

    constructor(timestamp: number, frequency?: number, gain?: number, pan?: number) {
        this.timestamp = timestamp;
        this.frequency = frequency;
        this.gain = gain;
        this.pan = pan;
    }
}

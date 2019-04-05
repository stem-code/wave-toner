export class AudioManager {
    private audioCtx: AudioContext;
    private brickwallLimiter: any;

    public currentConnectorNode;

    constructor() {
        this.audioCtx = new ((<any>window).AudioContext || (<any>window).webkitAudioContext)();
        this.audioCtx.resume();
        this.brickwallLimiter = this.audioCtx.createDynamicsCompressor();
        this.brickwallLimiter.threshold.value = 0.0;
        this.brickwallLimiter.knee.value = 0.1;
        this.brickwallLimiter.ratio.value = 20;
        this.brickwallLimiter.attack.value = 0.05;
        this.brickwallLimiter.release.value = 0.50;
        this.brickwallLimiter.connect(this.audioCtx.destination);
        this.currentConnectorNode = this.brickwallLimiter;
    }

    userGesture() {
        this.audioCtx.resume();
    }

    getAudioCtx() {
        return this.audioCtx;
    }

    getBrickWallLimiter() {
        return this.brickwallLimiter;
    }
}

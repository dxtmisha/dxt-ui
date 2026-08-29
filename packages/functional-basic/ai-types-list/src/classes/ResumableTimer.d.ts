// md5:dc989de1f1d457b4f1bfd40802a5c180 true
/** Pausable and resumable timer utility. @keywords timer, pause, resume, delay, timeout */
export declare class ResumableTimer {
    /** Creates a resumable timer instance. @param callback Function to be called after delay @param delay Delay in milliseconds @param blockStart If true, timer will not start immediately @keywords timer, constructor */
    constructor(callback: FunctionVoid, delay?: number, blockStart?: boolean);
    /** Resumes the timer if paused or starts it for the first time. @keywords resume, start, timer */
    resume(): this;
    /** Pauses the timer and tracks remaining time. @keywords pause, freeze, timer */
    pause(): this;
    /** Resets and restarts the timer with the original delay. @keywords reset, restart, timer */
    reset(): this;
    /** Completely clears the timer and resets its state. @keywords clear, cancel, stop, timer */
    clear(): this;
}
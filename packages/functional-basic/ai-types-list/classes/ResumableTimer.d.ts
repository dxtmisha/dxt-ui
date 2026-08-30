// md5:dc989de1f1d457b4f1bfd40802a5c180 true
/** Timer that can be paused, resumed, reset, and cleared. @keywords timer, pause, resume, timeout, delay */
export declare class ResumableTimer {
    /** Creates a resumable timer instance. @param blockStart If true, timer will not start immediately. @keywords timer, init */
    constructor(callback: FunctionVoid, delay?: number, blockStart?: boolean);
    /** Resumes the timer if paused, or starts it. @keywords resume, start, continue */
    resume(): this;
    /** Pauses the timer and tracks remaining time. @keywords pause, stop, hold */
    pause(): this;
    /** Resets and restarts the timer with the original delay. @keywords reset, restart */
    reset(): this;
    /** Completely clears and cancels the timer. @keywords clear, cancel, destroy */
    clear(): this;
}
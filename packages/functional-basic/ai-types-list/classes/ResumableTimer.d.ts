// md5:001888517ad517b582ebf0313bf5c9ea true
/** Timer that can be paused, resumed, reset, and cleared. @keywords timer, resumable, pause, resume, timeout, delay */
export declare class ResumableTimer {
    /** Creates a resumable timer and optionally starts it immediately. @keywords create, init, start */
    constructor(callback: FunctionVoid, delay?: number, blockStart?: boolean);
    /** Resets and restarts the timer with the original delay. @keywords reset, restart */
    reset(): this;
    /** Completely clears the timer and resets its state. @keywords clear, stop, cancel */
    clear(): this;
    /** Pauses the timer and calculates remaining time. @keywords pause, suspend, freeze */
    pause(): this;
    /** Resumes the timer with the remaining delay or starts it. @keywords resume, unpause, continue */
    resume(): this;
}
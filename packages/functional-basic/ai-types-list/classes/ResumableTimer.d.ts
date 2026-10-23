// md5:e3399fa79bf1806825acb9525a222998 true
/** Timer that can be paused, resumed, reset, and cleared. @keywords timer, pause, resume, delay, timeout, schedule */
export declare class ResumableTimer {
    /** Creates a new resumable timer instance. @keywords constructor, create, timer */
    constructor(callback: FunctionVoid, delay?: number, blockStart?: boolean);
    /** Resets and restarts the timer with the original delay. @keywords reset, restart, timer */
    reset(): this;
    /** Clears the timer and resets its state. @keywords clear, stop, cancel, timer */
    clear(): this;
    /** Pauses the timer and preserves remaining time. @keywords pause, freeze, timer */
    pause(): this;
    /** Resumes a paused timer or starts it if not running. @keywords resume, start, unpause, timer */
    resume(): this;
}
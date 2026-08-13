// md5:94b6d5fad132d7f0574dc694745546a8 true
/** Timer that can be paused and resumed @keywords timer resumable pause resume delay */
export declare class ResumableTimer {
    /** Creates a resumable timer */
    constructor(callback: FunctionVoid, delay?: number, blockStart?: boolean);
    /** Resumes the timer @keywords resume start timer */
    resume(): this;
    /** Pauses the timer @keywords pause timer */
    pause(): this;
    /** Resets and restarts the timer @keywords reset restart */
    reset(): this;
    /** Clears the timer and resets state @keywords clear */
    clear(): this;
    /** Gets the remaining time */
    protected getRemaining(): number;
    /** Gets the start time */
    protected getStartTime(): number;
    /** Executes the callback */
    protected go(): this;
    /** Updates the remaining time */
    protected updateRemaining(): this;
    /** Updates the start time */
    protected updateStartTime(): this;
    /** Stops the timer */
    protected stop(): this;
}
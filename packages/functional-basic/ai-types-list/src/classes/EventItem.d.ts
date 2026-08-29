// md5:c57ba8e7f06cc6f598fdcbb8f39f45dd true
/** Advanced wrapper managing DOM and window event listeners with lifecycle control, DOM safety, and performance optimizations @keywords event listener dom window observer scroll-sync lifecycle */
export declare class EventItem<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> {
    /** Initializes an EventItem instance @param elementSelector Target element or selector @param type Event name(s) or specialized types ('resize', 'scroll-sync') @keywords constructor event */
    constructor(elementSelector?: ElementOrString<E>, type?: string | string[], listener?: EventListenerDetail<O, D> | undefined, options?: EventOptions, detail?: D | undefined);
    /** Checks whether event listening is currently active @keywords active status state */
    isActive(): boolean;
    /** Returns the target DOM element or window @keywords element target get */
    getElement(): E | undefined;
    /** Updates the target element or selector and restarts listening if currently active @keywords set element target */
    setElement(elementSelector?: ElementOrString<E>): this;
    /** Sets a control element for DOM safety attachment checks @keywords control element safety dom */
    setElementControl<EC extends HTMLElement>(elementSelector?: ElementOrString<EC>): this;
    /** Updates the handled event type or types @keywords type event-type */
    setType(type: string | string[]): this;
    /** Updates the listener callback function @keywords listener callback handler */
    setListener(listener: EventListenerDetail<O, D>): this;
    /** Updates the event listener options @keywords options config capture */
    setOptions(options?: EventOptions): this;
    /** Updates additional custom data passed to the listener @keywords detail payload custom-data */
    setDetail(detail?: D): this;
    /** Dispatches a CustomEvent on the target element with detail payload @param detail Optional data payload for the custom event @keywords dispatch trigger fire customevent */
    dispatch(detail?: D | undefined): this;
    /** Starts listening to configured events @keywords start enable attach listen */
    start(): this;
    /** Stops listening to configured events @keywords stop disable detach unlisten */
    stop(): this;
    /** Toggles event listening state @param activity Flag indicating whether to start or stop listening @keywords toggle switch active */
    toggle(activity: boolean): this;
    /** Restarts the event listeners if currently active @keywords reset restart reload */
    reset(): this;
}
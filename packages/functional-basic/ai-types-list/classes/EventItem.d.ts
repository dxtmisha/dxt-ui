// md5:21db09a021054fc3e03965dbc5b9a496 true
/**
 * Advanced lifecycle-managed event listener wrapper with DOM-safety checks and optimizations for resize and scroll.
 * @keywords event-listener dom-events resize-observer scroll-sync event-dispatch
 * @example
 * const clickEvent = new EventItem('.btn', 'click', (e) => console.log('Clicked!'));
 * clickEvent.start();
 */
export declare class EventItem<E extends ElementOrWindow, O extends Event, D extends Record<string, unknown> = Record<string, unknown>> {
    /** Creates an EventItem instance. @keywords constructor init */
    constructor(elementSelector?: ElementOrString<E>, type?: string | string[], listener?: EventListenerDetail<O, D> | undefined, options?: EventOptions, detail?: D | undefined);
    /** Checks whether event listening is currently active. @keywords active status listening */
    isActive(): boolean;
    /** Returns the resolved target element. @keywords target element getter */
    getElement(): E | undefined;
    /** Updates the target element or selector. @keywords set-target element-bind */
    setElement(elementSelector?: ElementOrString<E>): this;
    /** Sets the control element used for DOM attachment safety checks. @keywords dom-safety control-element */
    setElementControl<EC extends HTMLElement>(elementSelector?: ElementOrString<EC>): this;
    /** Updates the event type or types to listen to. @keywords set-type event-type */
    setType(type: string | string[]): this;
    /** Updates the event listener callback. @keywords set-listener callback handler */
    setListener(listener: EventListenerDetail<O, D>): this;
    /** Updates the event listener configuration options. @keywords options capture passive */
    setOptions(options?: EventOptions): this;
    /** Updates the custom detail payload passed to listeners. @keywords set-detail payload custom-event */
    setDetail(detail?: D): this;
    /** Dispatches a CustomEvent with optional payload across configured event types. @keywords dispatch trigger fire */
    dispatch(detail?: D | undefined): this;
    /** Attaches and activates the event listeners. @keywords start listen attach */
    start(): this;
    /** Detaches and stops the event listeners. @keywords stop remove detach */
    stop(): this;
    /** Toggles the active listening state based on the given boolean. @keywords toggle state active */
    toggle(activity: boolean): this;
    /** Resets the event listener lifecycle by restarting if currently active. @keywords reset reload restart */
    reset(): this;
}
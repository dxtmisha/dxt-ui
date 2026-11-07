// md5:f88b3a2bd51b1ef47d94c5c0a57dc43b true
/** Advanced DOM and window event listener lifecycle manager with optimization and safety checks. @keywords event-manager, event-listener, dom-lifecycle, resize-observer, scroll-sync */
export declare class EventItem<E extends ElementOrWindow = ElementOrWindow, O extends Event = Event, D extends Record<string, unknown> = Record<string, unknown>> {
    /** Initializes a new EventItem instance with element target, event type, listener, and options. @keywords event, listener, dom, observer, init */
    constructor(elementSelector?: ElementOrString<E> | null, type?: string | string[], listener?: EventListenerDetail<O, D> | undefined, options?: EventOptions, detail?: D | undefined);
    /** Checks whether event listening is currently active. @keywords active, status, listening, check */
    isActive(): boolean;
    /** Returns the target DOM element. @keywords element, target, dom */
    getElement(): E | undefined;
    /** Sets custom detail data passed to listeners. @keywords detail, data, payload, custom-event */
    setDetail(detail?: D): this;
    /** Updates the target element or selector for event tracking. @keywords target, element, selector, update */
    setElement(elementSelector?: ElementOrString<E> | null): this;
    /** Sets a control element used for DOM safety and connectivity verification. @keywords control-element, dom-safety, verify */
    setElementControl<EC extends HTMLElement>(elementSelector?: ElementOrString<EC> | null): this;
    /** Updates the event listener callback function. @keywords listener, handler, callback */
    setListener(listener?: EventListenerDetail<O, D>): this;
    /** Updates event listener options or capture flag. @keywords options, capture, passive, once */
    setOptions(options?: EventOptions): this;
    /** Sets the event type or array of event types. @keywords type, event-name, event-type */
    setType(type: string | string[]): this;
    /** Restarts event listeners if currently active. @keywords reset, reload, restart */
    reset(): this;
    /** Dispatches a CustomEvent with optional detail data on the target element. @keywords dispatch, trigger, emit, custom-event */
    dispatch(detail?: D | undefined): this;
    /** Starts listening to configured events. @keywords start, listen, attach, bind */
    start(): this;
    /** Stops listening to configured events and cleans up observers. @keywords stop, unbind, detach, remove */
    stop(): this;
    /** Toggles the active state of event listening. @keywords toggle, enable, disable, switch */
    toggle(activity: boolean): this;
}
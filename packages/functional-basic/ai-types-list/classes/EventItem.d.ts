// md5:c57ba8e7f06cc6f598fdcbb8f39f45dd true
/**
 * Advanced wrapper for managing DOM event listeners with lifecycle control, safety checks, and optimizations.
 * @keywords event listener, dom events, resize observer, scroll sync, event item
 */
export declare class EventItem<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> {
    /** Creates an EventItem instance. @keywords event item, constructor */
    constructor(elementSelector?: ElementOrString<E>, type?: string | string[], listener?: EventListenerDetail<O, D> | undefined, options?: EventOptions, detail?: D | undefined);
    /** Checks whether event listening is active. @keywords is active, listening status */
    isActive(): boolean;
    /** Returns the target DOM element or window. @keywords get element, target */
    getElement(): E | undefined;
    /** Sets the target DOM element or selector for event listening. @keywords set element, target */
    setElement(elementSelector?: ElementOrString<E>): this;
    /** Sets the control element for DOM safety checks. @keywords element control, dom safety */
    setElementControl<EC extends HTMLElement>(elementSelector?: ElementOrString<EC>): this;
    /** Sets the handled event type or types. @keywords set type, event type */
    setType(type: string | string[]): this;
    /** Sets the event handler listener function. @keywords set listener, handler */
    setListener(listener: EventListenerDetail<O, D>): this;
    /** Sets the event listener options. @keywords set options, event options */
    setOptions(options?: EventOptions): this;
    /** Sets custom detail data passed to the listener or dispatch. @keywords set detail, custom data */
    setDetail(detail?: D): this;
    /** Dispatches a CustomEvent on the target element with optional detail data. @keywords dispatch, trigger event, custom event */
    dispatch(detail?: D | undefined): this;
    /** Starts listening to configured events. @keywords start, add event listener, attach */
    start(): this;
    /** Stops listening to events. @keywords stop, remove event listener, detach */
    stop(): this;
    /** Toggles event listening state based on the provided active flag. @keywords toggle, enable, disable */
    toggle(activity: boolean): this;
    /** Restarts active event listeners. @keywords reset, restart listener, reload */
    reset(): this;
}
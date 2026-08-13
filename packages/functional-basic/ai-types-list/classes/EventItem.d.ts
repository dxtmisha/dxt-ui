// md5:db6bd9dcc073e1aaaae635e910ff745b true
/**
 * Advanced wrapper for managing event listeners on DOM elements or window.
 * @keywords event_item dom_events event_listener resize scroll
 */
export declare class EventItem<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> {
    /** Event listener callback wrapper */
    protected listenerRecent: (event?: O | ResizeObserverEntry) => void;
    /**
     * Create an EventItem instance.
     * @keywords constructor
     */
    constructor(elementSelector?: ElementOrString<E>, type?: string | string[], listener?: EventListenerDetail<O, D> | undefined, options?: EventOptions, detail?: D | undefined);
    /** Check whether event listening is currently enabled @keywords is_active */
    isActive(): boolean;
    /** Return the target element @keywords get_element */
    getElement(): E | undefined;
    /** Change of an element for tracking @keywords set_element */
    setElement(elementSelector?: ElementOrString<E>): this;
    /** Modify the control element for DOM safety checks @keywords set_element_control */
    setElementControl<EC extends HTMLElement>(elementSelector?: ElementOrString<EC>): this;
    /** Change the type of the handled event @keywords set_type */
    setType(type: string | string[]): this;
    /** Modify the listener function @keywords set_listener */
    setListener(listener: EventListenerDetail<O, D>): this;
    /** Modify the options object that defines event listener characteristics @keywords set_options */
    setOptions(options?: EventOptions): this;
    /** Modify additional data provided to the listener @keywords set_detail */
    setDetail(detail?: D): this;
    /** Trigger events on the target element @keywords dispatch custom_event */
    dispatch(detail?: D | undefined): this;
    /** Start event listening @keywords start */
    start(): this;
    /** Stop event listening @keywords stop */
    stop(): this;
    /** Toggle event handler state @keywords toggle */
    toggle(activity: boolean): this;
    /** Reset listening events @keywords reset */
    reset(): this;
    /** Check if ResizeObserver exists @keywords is_observer */
    protected isObserver(): boolean;
    /** Implementation of resize event @keywords make_resize */
    protected makeResize(): boolean;
    /** Implementation of scroll event @keywords make_scroll */
    protected makeScroll(): boolean;
}
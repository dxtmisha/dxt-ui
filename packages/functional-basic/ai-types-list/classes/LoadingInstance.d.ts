// md5:45657576a8a4ea3ad90a4e8f15ff49aa true
export type LoadingDetail = {
    loading: boolean;
};

export type LoadingRegistrationItem = {
    item: EventItem<Window, CustomEvent, LoadingDetail>;
    listener: EventListenerDetail<CustomEvent, LoadingDetail>;
    element?: ElementOrString<HTMLElement>;
};

/** Manages global loading state counters and event notifications. @keywords loading, state, loader, progress */
export declare class LoadingInstance {
    /** Initializes the loading tracker. @param eventName Name of the event to broadcast loading state @keywords init, constructor */
    constructor(eventName?: string);
    /** Checks whether the loader is currently active. @keywords is, status, active */
    is(): boolean;
    /** Gets the current loading count value. @keywords get, count, counter */
    get(): number;
    /** Increments loading counter and activates loader. @keywords show, start, display */
    show(): void;
    /** Decrements loading counter and hides loader when count reaches zero. @keywords hide, stop, dismiss */
    hide(): void;
    /** Registers an event listener for loading state changes. @param listener Event listener callback @param element Target DOM element @keywords register, listener, subscribe */
    registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /** Unregisters a loading state event listener. @param listener Event listener callback @param element Target DOM element @keywords unregister, unsubscribe, remove */
    unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
}
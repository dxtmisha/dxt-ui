// md5:0176ff26850c6286c00de710e4080c3b true
export type LoadingDetail = {
    loading: boolean;
};
export type LoadingRegistrationItem = {
    item: EventItem<Window, CustomEvent, LoadingDetail>;
    listener: EventListenerDetail<CustomEvent, LoadingDetail>;
    element?: ElementOrString<HTMLElement>;
};
/** Loading instance manager class @keywords loading, loader, spinner, global */
export declare class LoadingInstance {
    /** Create loading instance @keywords constructor, init */
    constructor(eventName?: string);
    /** Check if loading is active @keywords is, active, check */
    is(): boolean;
    /** Get current loading counter value @keywords get, count, value */
    get(): number;
    /** Show loading indicator @keywords show, start, loading */
    show(): void;
    /** Hide loading indicator @keywords hide, stop, loading */
    hide(): void;
    /** Register loading event listener @keywords register, event, listener */
    registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /** Unregister loading event listener @keywords unregister, remove, event */
    unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
}
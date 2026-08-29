// md5:45657576a8a4ea3ad90a4e8f15ff49aa true
export type LoadingDetail = {
    loading: boolean;
};

export type LoadingRegistrationItem = {
    item: EventItem<Window, CustomEvent, LoadingDetail>;
    listener: EventListenerDetail<CustomEvent, LoadingDetail>;
    element?: ElementOrString<HTMLElement>;
};

/** Class for managing global loading state. @keywords loading loader state spinner */
export declare class LoadingInstance {
    /** @param eventName Event name for tracking loading. @keywords constructor init */
    constructor(eventName?: string);
    /** Checks if the loader is currently active. @keywords is active status */
    is(): boolean;
    /** Gets the current loading counter value. @keywords get count value */
    get(): number;
    /** Increments loading counter and shows the loader. @keywords show enable start */
    show(): void;
    /** Decrements loading counter and hides the loader. @keywords hide disable stop */
    hide(): void;
    /** Registers an event listener for loading state changes. @keywords register listen subscribe */
    registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /** Unregisters a loading state change event listener. @keywords unregister remove unsubscribe */
    unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
}
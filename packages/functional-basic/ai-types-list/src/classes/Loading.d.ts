// md5:ab293d4dc99d2780be41cfdc6545f6f6 true
/** Global loading state and event manager @keywords loading, loader, spinner, state */
export declare class Loading {
    /** Checks if the loader is currently active @keywords loading, is_active, status */
    static is(): boolean;
    /** Gets current loading counter value @keywords loading, count, value */
    static get(): number;
    /** Returns a request-isolated LoadingInstance instance @keywords loading, instance, context */
    static getItem(): LoadingInstance;
    /** Shows the loader and increments loading count @keywords loading, show, start */
    static show(): void;
    /** Hides the loader and decrements loading count @keywords loading, hide, stop */
    static hide(): void;
    /** Subscribes a listener to loading change events @keywords loading, event, listener, subscribe */
    static registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /** Unsubscribes a listener from loading change events @keywords loading, event, listener, unsubscribe */
    static unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
}
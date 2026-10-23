// md5:4d8705596ce1acb451d6bb99a4c4ed8e true
/** Manages global loading state and loader events. @keywords global loading, loader, spinner, state */
export declare class Loading {
    /** Gets the current loading counter value. @keywords loading value, counter, progress */
    static get(): number;
    /** Checks if the loader is currently active. @keywords is loading, active loader, status */
    static is(): boolean;
    /** Returns a request-isolated LoadingInstance object. @keywords loading instance, isolated loader, context */
    static getItem(): LoadingInstance;
    /** Increments the loading counter and displays the loader. @keywords show loader, start loading, display spinner */
    static show(): void;
    /** Decrements the loading counter and hides the loader when zero. @keywords hide loader, stop loading, dismiss spinner */
    static hide(): void;
    /** Registers an event listener for loading state changes. @keywords add event listener, loading event, watch */
    static registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /** Unregisters a previously added loading state event listener. @keywords remove event listener, unsubscribe, loading event */
    static unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
}
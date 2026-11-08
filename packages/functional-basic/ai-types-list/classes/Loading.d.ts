// md5:92729145883a40812f753df042c1e5a1 true
/** Global loading state manager. @keywords loading, loader, spinner, state */
export declare class Loading {
    /** Gets the current loading count value. @keywords loading, count, get */
    static get(): number;
    /** Checks if the loader is currently active. @keywords active, status, is */
    static is(): boolean;
    /** Returns a request-isolated instance of LoadingInstance. @keywords instance, request, isolated */
    static getItem(): LoadingInstance;
    /** Displays or increments the loading indicator. @keywords show, display, increment */
    static show(): void;
    /** Hides or decrements the loading indicator. @keywords hide, dismiss, decrement */
    static hide(): void;
    /** Registers an event listener for loading state changes. @keywords event, listen, register */
    static registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement> | null): void;
    /** Unregisters an event listener for loading state changes. @keywords event, unlisten, unregister */
    static unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement> | null): void;
}
// md5:ab293d4dc99d2780be41cfdc6545f6f6 true
/** Class for managing global loading state. @keywords loading, loader, spinner, global */
export declare class Loading {
    /** Checks if the loader is currently active. @keywords is loading, active */
    static is(): boolean;
    /** Gets the current loading count or value. @keywords loading count, status */
    static get(): number;
    /** Returns a request-isolated instance of LoadingInstance. @keywords loading instance, isolated */
    static getItem(): LoadingInstance;
    /** Shows the loader. @keywords show loader, start loading */
    static show(): void;
    /** Hides the loader. @keywords hide loader, stop loading */
    static hide(): void;
    /** Registers an event listener for loading state changes. @keywords loading event, add listener */
    static registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /** Unregisters a loading state event listener. @keywords remove listener, unsubscribe */
    static unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
}
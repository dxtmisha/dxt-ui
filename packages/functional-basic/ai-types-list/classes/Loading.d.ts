// md5:ce517074c245911361a91dd81a2e541c true
/** Global loading indicator manager. @keywords loading, loader, spinner, progress, global */
export declare class Loading {
    /** Checks if global loading is currently active. @keywords is active, loading state, status */
    static is(): boolean;
    /** Gets the current loading counter value. @keywords get loading, counter, active requests */
    static get(): number;
    /** Returns a request-isolated LoadingInstance. @keywords loading instance, isolated loader */
    static getItem(): LoadingInstance;
    /** Shows the loader and increments the active count. @keywords show loader, start loading, spinner */
    static show(): void;
    /** Hides the loader and decrements the active count. @keywords hide loader, stop loading, dismiss */
    static hide(): void;
    /** Registers an event listener for loading state changes. @keywords subscribe, add event listener, loading change */
    static registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement> | null): void;
    /** Unregisters a loading state change event listener. @keywords unsubscribe, remove event listener, loading change */
    static unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement> | null): void;
}
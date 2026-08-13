// md5:b6910bbe7a7568f82dbbb36de5fe9d44 true
/** Class for working with global loading. @keywords loading loader global */
export declare class Loading {
    /** Check if the loader is active. @keywords loading active check */
    static is(): boolean;
    /** Get current loading value. @keywords loading get count */
    static get(): number;
    /** Get LoadingInstance item. @keywords loading instance item */
    static getItem(): LoadingInstance;
    /** Show the loader. @keywords loading show start */
    static show(): void;
    /** Hide the loader. @keywords loading hide stop */
    static hide(): void;
    /** Register loading event. @keywords loading event register */
    static registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /** Unregister loading event. @keywords loading event unregister */
    static unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
}
// md5:f48099a102f929d515982f91b575383a true
/** Tracks and checks edited or modified values in a dataset. @keywords change detection, dirty check, watch, state tracker */
export declare class DesignChanged<T extends Record<string, any>> {
    /** Initializes change tracker with base properties and optional watched keys. @keywords constructor, init */
    constructor(props: T, watch?: string[]);
    /** Checks if a specific property or list of properties has been modified. @keywords is modified, changed property, check */
    is(name: string | string[]): boolean;
    /** Checks if any tracked data has changed. @keywords is changed, dirty check, modified */
    isChanged(): boolean;
    /** Updates internal snapshot to current values, resetting change status. @keywords update, sync, reset snapshot */
    update(): void;
}
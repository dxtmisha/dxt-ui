// md5:f48099a102f929d515982f91b575383a true
/** Tracks and checks modified object property values. @keywords change detection, dirty check, watcher */
export declare class DesignChanged<T extends Record<string, any>> {
    /** Initializes change tracker with base properties and optional watched keys. @keywords constructor, init */
    constructor(props: T, watch?: string[]);
    /** Checks if a specific property or list of properties has changed. @keywords is changed, property check */
    is(name: string | string[]): boolean;
    /** Checks if any tracked data has changed. @keywords has changes, dirty check */
    isChanged(): boolean;
    /** Updates and synchronizes baseline snapshot values. @keywords update snapshot, sync */
    update(): void;
}
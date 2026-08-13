// md5:f48099a102f929d515982f91b575383a true
/** Checks properties for changes. @keywords design changed check update */
export declare class DesignChanged<T extends Record<string, any>> {
    /** Creates a changed tracker instance. @keywords constructor create */
    constructor(props: T, watch?: string[]);
    /** Checks if property changed. @keywords is changed check */
    is(name: string | string[]): boolean;
    /** Checks if any watched property changed. @keywords is changed */
    isChanged(): boolean;
    /** Updates cached property values. @keywords update cache */
    update(): void;
}
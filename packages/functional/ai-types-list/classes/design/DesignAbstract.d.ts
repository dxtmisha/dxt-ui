// md5:20f02f58f8e154a8ff37e58bf2a98adb true
/** Base abstract class for component design constructors. @keywords design abstract constructor */
export declare abstract class DesignAbstract<T extends Record<string, any>, C extends Record<string, any>> {
    /** Initializes the design instance with properties, change callback, and watched keys. @keywords constructor init */
    constructor(props: T, callback?: ((event: C) => void) | undefined, changed?: string[]);
    /** Triggers updates and executes the callback function. @param compelled Forces data to update @keywords make update */
    make(compelled?: boolean): this;
    /** Executes the change callback function. @param compelled Forces data update execution @keywords callback invoke */
    makeCallback(compelled?: boolean): void;
}
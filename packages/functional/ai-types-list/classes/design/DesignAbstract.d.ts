// md5:20f02f58f8e154a8ff37e58bf2a98adb true
/** Base class for working with design component constructors. @keywords design abstract constructor callback */
export declare abstract class DesignAbstract<T extends Record<string, any>, C extends Record<string, any>> {
    /** Constructor @keywords design constructor initialize */
    constructor(props: T, callback?: ((event: C) => void) | undefined, changed?: string[]);
    /** Calls the callback function. @keywords design make update */
    make(compelled?: boolean): this;
    /** Calls the callback function. @keywords design callback */
    makeCallback(compelled?: boolean): void;
}
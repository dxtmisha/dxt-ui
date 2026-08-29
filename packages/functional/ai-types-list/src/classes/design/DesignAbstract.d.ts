// md5:20f02f58f8e154a8ff37e58bf2a98adb true
/** Base abstract design class for constructor and reactive state management. @keywords design, constructor, abstract, state */
export declare abstract class DesignAbstract<T extends Record<string, any>, C extends Record<string, any>> {
    /** Initializes a new instance with props, callback, and tracked property keys. @keywords constructor, init */
    constructor(props: T, callback?: ((event: C) => void) | undefined, changed?: string[]);
    /** Triggers computation and executes the callback, returning instance. @keywords make, trigger, update */
    make(compelled?: boolean): this;
    /** Executes the callback function, optionally forcing data update. @keywords callback, dispatch, update */
    makeCallback(compelled?: boolean): void;
}
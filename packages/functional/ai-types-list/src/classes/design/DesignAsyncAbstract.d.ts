// md5:6d4de6bbf0fa79b0af4231cc5f84165d true
/** Base abstract class for asynchronous component constructor handling. @keywords async, design, constructor, base */
export declare abstract class DesignAsyncAbstract<T extends Record<string, any>, C extends Record<string, any>> extends DesignAbstract<T, C> {
    /** Triggers the update callback and returns the instance. @param compelled Forces data update. @keywords make, trigger, update */
    make(compelled?: boolean): this;
    /** Asynchronously executes the update callback function. @param compelled Forces data update. @keywords makeCallback, async, update */
    makeCallback(compelled?: boolean): Promise<void>;
}
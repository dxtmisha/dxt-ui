// md5:6d4de6bbf0fa79b0af4231cc5f84165d true
/** Base abstract class for working with asynchronous constructors. @keywords design, async, abstract, constructor */
export declare abstract class DesignAsyncAbstract<T extends Record<string, any>, C extends Record<string, any>> extends DesignAbstract<T, C> {
    /** Triggers the async update process. @param compelled Forces data update. @keywords make, async, update */
    make(compelled?: boolean): this;
    /** Executes the asynchronous callback to update data. @param compelled Forces data update. @keywords make callback, async, promise */
    makeCallback(compelled?: boolean): Promise<void>;
}
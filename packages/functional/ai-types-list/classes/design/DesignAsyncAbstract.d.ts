// md5:6d4de6bbf0fa79b0af4231cc5f84165d true
/** Base class for asynchronous design construction. @keywords design async abstract class */
export declare abstract class DesignAsyncAbstract<T extends Record<string, any>, C extends Record<string, any>> extends DesignAbstract<T, C> {
    /** Makes design callbacks. @keywords make design async */
    make(compelled?: boolean): this;
    /** Makes callback asynchronously. @keywords make callback async */
    makeCallback(compelled?: boolean): Promise<void>;
    /** Initializes event asynchronously. @keywords init event async */
    protected abstract initEvent(): Promise<void>;
}
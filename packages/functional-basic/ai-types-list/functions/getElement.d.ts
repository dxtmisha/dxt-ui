// md5:82c2f11794d99bac6a09c384686da13a true
/** Returns the first Element matching the specified selector or the element itself. @keywords getElement, querySelector, dom, selector */
export declare function getElement<E extends ElementOrWindow, R extends Exclude<E, Window>>(element?: ElementOrString<E>): R | undefined;
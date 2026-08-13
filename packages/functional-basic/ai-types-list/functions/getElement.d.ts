// md5:13795a5401d8b82fbdce7b52e4286ebf true
/**
 * Returns the first Element matching the specified selector or element.
 * @keywords getElement querySelector dom element
 */
export declare function getElement<E extends ElementOrWindow, R extends Exclude<E, Window>>(element?: ElementOrString<E>): R | undefined;
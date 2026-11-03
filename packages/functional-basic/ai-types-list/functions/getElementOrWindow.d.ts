// md5:42b658ed0034ee7a42472ac5b9ad1f12 true
/** Resolves the specified selector or element, returning the Element or preserving the Window object directly. @keywords dom, window, element, selector, querySelector, getElementOrWindow */
export declare function getElementOrWindow<E extends ElementOrWindow = HTMLElement>(element?: ElementOrString<E> | null): E | undefined;
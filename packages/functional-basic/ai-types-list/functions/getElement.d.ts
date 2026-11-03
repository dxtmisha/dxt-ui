// md5:e69f5ce81f0f70d66f6e20cfb467cee6 true
/** Resolves a selector string, Element, or Window to a DOM element (or document.body for Window). @keywords element, querySelector, getElement, resolve, dom, window, ssr */
export declare function getElement<E extends ElementOrWindow = HTMLElement, R extends ElementResolved<E> = ElementResolved<E>>(element?: ElementOrString<E> | null): R | undefined;
// md5:db3c28ded21f552ff58c1fef3ab5b9ed true
/** Checks if an element is visible in the DOM and not hidden by CSS. @keywords visibility, dom, is visible, element, hidden */
export declare function isElementVisible<E extends ElementOrWindow = HTMLElement>(elementSelectors?: ElementOrString<E> | null): boolean;
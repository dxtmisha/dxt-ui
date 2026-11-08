// md5:67c0d42a14ab3c204052e4db3542b151 true
/** Checks layout visibility using native checkVisibility or style and dimension fallback (off-screen elements can be visible). @keywords isElementVisible, checkVisibility, dom, layout, visibility, hidden */
export declare function isElementVisible<E extends ElementOrWindow = HTMLElement>(elementSelectors?: ElementOrString<E> | null): boolean;
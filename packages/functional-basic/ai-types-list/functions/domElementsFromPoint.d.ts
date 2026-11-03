// md5:22e2c3b41960c291e04bf3fc345d229f true
/**
 * Returns an array of all elements at the specified coordinates.
 * @remarks In non-DOM (SSR) environments or when `document.elementsFromPoint` is unsupported, the function returns an empty array `[]`. Coordinates are evaluated relative to the viewport.
 * @keywords dom, elementsFromPoint, hit test, coordinates, viewport elements
 */
export declare function domElementsFromPoint(coordinator?: ImageCoordinator | null): Element[];
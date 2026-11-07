// md5:996450b1c27d2c3a3e884e433041aae2 true
/** Returns or generates a unique element ID, using document.body if Window is provided. @keywords element id, generate id, dom id, unique identifier */
export declare function getElementId<E extends ElementOrWindow = HTMLElement>(element?: ElementOrString<E> | null, selector?: string): string;
/**
 * Initializes the getElementId function with a context ID generator listener.
 * @warning Initialization is mandatory for SSR support across server and client.
 * @keywords ssr id, id listener, context id, hydration id
 * @example
 * import { useId } from 'vue'
 * import { initGetElementId } from '@dxtmisha/functional-basic'
 *
 * initGetElementId(() => useId())
 */
export declare function initGetElementId(newListener: () => string | number | Undefined): void;
/** Resets the getElementId context listener. @keywords reset id listener, clear id context */
export declare function resetGetElementId(): void;
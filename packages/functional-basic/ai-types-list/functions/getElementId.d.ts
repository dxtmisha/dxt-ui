// md5:6a8442dd8571aaea52c57c3c8d63f5f0 true
/** Returns or generates a unique element ID, targeting document.body if Window is provided. @keywords element id, get id, generate id, dom id */
export declare function getElementId<E extends ElementOrWindow>(element?: ElementOrString<E>, selector?: string): string;
/**
 * Initializes the getElementId function with a context ID provider.
 * @warning Initialization is mandatory for correct functioning of SSR on both server and client sides.
 * @example
 * 
 * import { useId } from 'vue'
 * import { initGetElementId } from '@dxtmisha/functional-basic'
 *
 * initGetElementId(() => useId())
 * 
 * @keywords init element id, ssr id provider, listener setup
 */
export declare function initGetElementId(newListener: () => string | number): void;
/** Resets the getElementId listener. @keywords reset element id, clear id listener */
export declare function resetGetElementId(): void;
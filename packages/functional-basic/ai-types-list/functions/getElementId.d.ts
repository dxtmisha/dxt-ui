// md5:ef30ec5766e6322190da66b291934ba1 true
/** Returns the element ID or generates a new unique ID if missing. @keywords element id, generate id, get id, dom id */
export declare function getElementId<E extends ElementOrWindow>(element?: ElementOrString<E>, selector?: string): string;
/**
 * Initializes the element ID generator listener for SSR context synchronization.
 * @warning Initialization is mandatory for correct functioning of SSR on both server and client sides.
 * @example
 * ```typescript
 * import { useId } from 'vue'
 * import { initGetElementId } from '@dxtmisha/functional-basic'
 *
 * initGetElementId(() => useId())
 * ```
 * @keywords init id, ssr id listener, setup getElementId
 */
export declare function initGetElementId(newListener: () => string | number): void;
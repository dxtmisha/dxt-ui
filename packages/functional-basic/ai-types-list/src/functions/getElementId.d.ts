// md5:ef30ec5766e6322190da66b291934ba1 true
/** Returns or generates a unique element identifier. @keywords element id, generate id, dom id */
export declare function getElementId<E extends ElementOrWindow>(element?: ElementOrString<E>, selector?: string): string;
/**
 * Initializes getElementId with a context listener for SSR support.
 * @warning Initialization is mandatory for correct functioning of SSR on both server and client sides.
 * @example
 * ```typescript
 * import { useId } from 'vue'
 * import { initGetElementId } from '@dxtmisha/functional-basic'
 *
 * initGetElementId(() => useId())
 * ```
 * @keywords init element id, ssr id listener
 */
export declare function initGetElementId(newListener: () => string | number): void;
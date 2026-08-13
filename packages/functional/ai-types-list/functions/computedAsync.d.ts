// md5:98ab7a37e1128ccab48e1d75bfaea5f7 true
import { ComputedRef, DebuggerOptions } from 'vue';

/**
 * Creates a computed property that handles asynchronous getters.
 * @keywords computed async reactive vue
 */
export declare function computedAsync<R>(getter: (() => Promise<R>) | (() => R) | R, initialState?: (() => R) | R, ignore?: R, debugOptions?: DebuggerOptions): ComputedRef<R | undefined>;
// md5:12b8f17ed05873e41b3f0428faa70cdb true
import { type ComputedRef, type DebuggerOptions } from 'vue';
/** Creates a reactive computed property that supports asynchronous getters, initial states, and ignored values. @keywords computedAsync, async computed, vue reactivity, promise computed */
export declare function computedAsync<R>(getter: (() => Promise<R>) | (() => R) | R, initialState?: (() => R) | R, ignore?: R, debugOptions?: DebuggerOptions): ComputedRef<R | undefined>;
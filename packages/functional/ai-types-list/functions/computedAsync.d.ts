// md5:1693cb71c9040c62e4f4eb95e2bd72a0 true
import { type ComputedRef, type DebuggerOptions } from 'vue';
/** Creates a computed ref handling asynchronous getters with race-condition protection and lazy evaluation. @keywords computed async reactive vue promise getter */
export declare function computedAsync<R>(getter: (() => Promise<R>) | (() => R) | R, initialState?: (() => R) | R, ignore?: R, debugOptions?: DebuggerOptions): ComputedRef<R | undefined>;
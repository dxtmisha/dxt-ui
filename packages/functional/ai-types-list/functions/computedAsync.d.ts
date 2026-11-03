// md5:942f932d1de7cee9bfaf465cf33a55df true
import { type ComputedRef, type DebuggerOptions } from 'vue';
/** Creates a computed property handling asynchronous getters with race condition handling. @keywords computed, async, asynchronous, reactive, getter, vue */
export declare function computedAsync<R, I = R>(getter: (() => Promise<R>) | (() => R) | R, initialState?: (() => I) | I, ignore?: R, debugOptions?: DebuggerOptions): ComputedRef<R | I | undefined>;
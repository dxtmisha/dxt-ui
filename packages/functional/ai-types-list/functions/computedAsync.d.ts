// md5:f72fa32e51286d8ed25e1f48c8861a41 true
import { type ComputedRef, type DebuggerOptions } from 'vue';
/** Creates a computed ref handling asynchronous getters where only the latest evaluation updates the result. @note Reactive dependencies must be accessed before the first `await`. @keywords computed async vue reactive promise getter */
export declare function computedAsync<R, I = R>(getter: (() => Promise<R> | R) | Promise<R> | R, initialState?: (() => I) | I, ignore?: R, debugOptions?: DebuggerOptions): ComputedRef<R | I | undefined>;
// md5:818010903ad998562cfea68a507edf01 true
import { ComputedGetter, ComputedRef, DebuggerOptions } from 'vue';

/**
 * Creates a language-dependent computed reactive property.
 * @keywords computed language reactive getter
 */
export declare function computedByLanguage<T, R extends (T | undefined) = T | undefined>(getter: ComputedGetter<R>, getterNone?: R | (() => R), conditions?: () => boolean, debugOptions?: DebuggerOptions): ComputedRef<R>;
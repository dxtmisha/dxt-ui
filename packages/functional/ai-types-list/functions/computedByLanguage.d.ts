// md5:29bfa01a14dc6f9bc5cc5c2f2a629462 true
import { type ComputedGetter, type ComputedRef, type DebuggerOptions } from 'vue';
/** Creates a reactive computed property that updates based on the current language and conditions. @keywords computed, i18n, language, reactive */
export declare function computedByLanguage<T, D = T | undefined>(getter: ComputedGetter<T>, getterNone?: D | (() => D), conditions?: () => boolean, debugOptions?: DebuggerOptions): ComputedRef<T | (D extends () => infer DR ? DR : D)>;
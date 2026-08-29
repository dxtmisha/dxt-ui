// md5:ce4c7eb50f476f154408c6a8ef54350d true
import { type ComputedGetter, type ComputedRef, type DebuggerOptions } from 'vue';
/** Creates a reactive computed property that updates based on the current language and condition evaluation. @keywords computed, language, i18n, reactive, getter */
export declare function computedByLanguage<T, R extends (T | undefined) = T | undefined>(getter: ComputedGetter<R>, getterNone?: R | (() => R), conditions?: () => boolean, debugOptions?: DebuggerOptions): ComputedRef<R>;
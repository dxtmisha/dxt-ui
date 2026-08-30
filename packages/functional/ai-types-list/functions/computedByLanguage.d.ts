// md5:ce4c7eb50f476f154408c6a8ef54350d true
import { type ComputedGetter, type ComputedRef, type DebuggerOptions } from 'vue';
/** Creates a reactive computed property evaluated based on language and conditions, with fallback support. @keywords computed, i18n, language, localization, reactive, fallback */
export declare function computedByLanguage<T, R extends (T | undefined) = T | undefined>(getter: ComputedGetter<R>, getterNone?: R | (() => R), conditions?: () => boolean, debugOptions?: DebuggerOptions): ComputedRef<R>;
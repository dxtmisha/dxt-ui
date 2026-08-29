// md5:126b102ebb61fa7f29d512e13aa37cb6 true
import { type ShallowRef } from 'vue';
import { type TranslateInstance, type TranslateList } from '@dxtmisha/functional-basic';
/**
 * Returns a reactive ShallowRef of translated texts that automatically updates on language change.
 * @example const translations = useTranslateRef(['home.title', 'home.description'] as const);
 * @keywords translate, i18n, localization, reactive, shallowRef, vue
 */
export declare function useTranslateRef<T extends (string | string[])[]>(names: T, translateInstance?: TranslateInstance): ShallowRef<TranslateList<T>>;
/**
 * Shorthand for `useTranslateRef` to obtain reactive translations.
 * @example const labels = t(['button.save', 'button.cancel'] as const);
 * @keywords translate, i18n, localization, shorthand, t
 */
export declare const t: <T extends string[]>(names: T) => ShallowRef<TranslateList<T>>;
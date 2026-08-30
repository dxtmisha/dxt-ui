// md5:126b102ebb61fa7f29d512e13aa37cb6 true
import { type ShallowRef } from 'vue';
import { type TranslateInstance, type TranslateList } from '@dxtmisha/functional-basic';
/**
 * Returns a reactive ShallowRef of translated texts for given keys, auto-updating on locale change.
 * @example const translations = useTranslateRef(['home.title', 'home.description'] as const);
 * @keywords translate translation i18n vue composable shallowRef reactive
 */
export declare function useTranslateRef<T extends (string | string[])[]>(names: T, translateInstance?: TranslateInstance): ShallowRef<TranslateList<T>>;
/** Shorthand for `useTranslateRef`. @keywords translate i18n t vue composable */
export declare const t: <T extends string[]>(names: T) => ShallowRef<TranslateList<T>>;
// md5:e3f47fb5918262c2633eb9b0831d757b true
import { type ShallowRef } from 'vue';
import { type TranslateInstance, type TranslateList } from '@dxtmisha/functional-basic';
/**
 * Returns a reactive ShallowRef of translations for specified keys, updating automatically on language change.
 * @example const translations = useTranslateRef(['home.title', 'home.description'] as const);
 * @keywords i18n, translate, localization, shallowRef, reactive, useTranslateRef
 */
export declare function useTranslateRef<T extends (string | string[])[]>(names: T, translateInstance?: TranslateInstance): ShallowRef<TranslateList<T>>;
/**
 * Shorthand for useTranslateRef to obtain reactive translations.
 * @example const labels = t(['button.save', 'button.cancel'] as const);
 * @keywords i18n, translate, shorthand, t, localization, reactive
 */
export declare const t: <T extends (string | string[])[]>(names: T, translateInstance?: TranslateInstance) => ShallowRef<TranslateList<T>>;
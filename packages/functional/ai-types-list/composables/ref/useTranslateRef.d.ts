// md5:631baf517f8784bffb71a5b5de4bd80e true
import { ShallowRef } from 'vue';
import { TranslateInstance, TranslateList } from '@dxtmisha/functional-basic';

/**
 * Gets translated text by key or array of keys.
 * @keywords translate ref localization i18n
 */
export declare function useTranslateRef<T extends (string | string[])[]>(names: T, translateInstance?: TranslateInstance): ShallowRef<TranslateList<T>>;

/**
 * Shorthand alias for useTranslateRef.
 * @keywords translate t localization i18n shorthand
 */
export declare const t: <T extends string[]>(names: T) => ShallowRef<TranslateList<T>>;
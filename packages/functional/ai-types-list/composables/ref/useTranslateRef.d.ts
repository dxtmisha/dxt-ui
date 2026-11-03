// md5:5ea88fd502096156bb6a00425afd94df true
import { type ShallowRef } from 'vue';
import { type TranslateInstance, type TranslateList } from '@dxtmisha/functional-basic';
/** Gets translated text as a reactive ShallowRef that updates on language changes. @keywords translate, i18n, localization, shallowRef */
export declare function useTranslateRef<T extends (string | string[])[]>(names: T, translateInstance?: TranslateInstance): ShallowRef<TranslateList<T>>;
/** Shorthand for useTranslateRef. @keywords translate, shorthand, i18n, localization */
export declare const t: <T extends string[]>(names: T) => ShallowRef<TranslateList<T>>;
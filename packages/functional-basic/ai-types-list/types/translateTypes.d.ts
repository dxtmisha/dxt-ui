// md5:5cc611483b3118288c41edb2a24d88ce true
/** Translation plugin configuration options @keywords i18n, translate, config, options */
export type TranslateConfig = {
    url?: string;
    propsName?: string;
    readApi?: boolean;
};
/** Translation code or list of translation codes @keywords i18n, key, code */
export type TranslateCode = string | string[];
/** Map of translation keys to resolved translated strings @keywords i18n, list, dictionary */
export type TranslateList<T extends TranslateCode[]> = {
    [K in T[number] as K extends readonly string[] ? K[0] : K]: string;
};
/** Conditional translation result resolving to an object for multiple keys or a string for single key @keywords i18n, translate, resolver */
export type TranslateItemOrList<T extends TranslateCode> = T extends string[] ? TranslateList<T> : string;
export type TranslateDataFileList = Record<string, string>;
/** Asynchronous loader function for translation data @keywords i18n, loader, async */
export type TranslateDataFileItem = () => Promise<TranslateDataFileList>;
/** Mapping of locale identifiers to translation file loaders @keywords i18n, locale, dictionary */
export type TranslateDataFile = Record<string, TranslateDataFileItem>;
/** Prefix identifier for global translations @keywords i18n, global, prefix */
export declare const TRANSLATE_GLOBAL_PREFIX = "global";
/** Batch loading request timeout in milliseconds @keywords i18n, timeout, batch */
export declare const TRANSLATE_TIME_OUT = 160;
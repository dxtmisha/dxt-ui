// md5:5cc611483b3118288c41edb2a24d88ce true
/** Configuration options for the translation plugin. @keywords translate, config, options */
export type TranslateConfig = {
    url?: string;
    propsName?: string;
    readApi?: boolean;
};
export type TranslateCode = string | string[];
/** Key-value record mapping translation codes to resolved strings. @keywords translate, list, dictionary */
export type TranslateList<T extends TranslateCode[]> = {
    [K in T[number] as K extends readonly string[] ? K[0] : K]: string;
};
/** Resolves translation output to a record for list requests or a string for a single key. @keywords translate, conditional, resolver */
export type TranslateItemOrList<T extends TranslateCode> = T extends string[] ? TranslateList<T> : string;
export type TranslateDataFileList = Record<string, string>;
export type TranslateDataFileItem = () => Promise<TranslateDataFileList>;
export type TranslateDataFile = Record<string, TranslateDataFileItem>;
/** Prefix for global translation keys. @keywords translate, global, prefix */
export declare const TRANSLATE_GLOBAL_PREFIX = "global";
/** Batch loading request timeout in milliseconds. @keywords translate, timeout, batch */
export declare const TRANSLATE_TIME_OUT = 160;
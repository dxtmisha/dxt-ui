// md5:180a1b1882c4ae4c49c240a6b34464eb true
/** Configuration options for the translation plugin. @keywords translate, config, options */
export type TranslateConfig = {
    url?: string;
    propsName?: string;
    readApi?: boolean;
};
export type TranslateCode = string | string[];
/** Map of translation codes to their localized string values. @keywords translate, list, mapping */
export type TranslateList<T extends TranslateCode[]> = {
    [K in T[number] as K extends readonly string[] ? K[0] : K]: string;
};
/** Resolves return type to a single translated string or a mapped dictionary. @keywords translate, conditional */
export type TranslateItemOrList<T extends TranslateCode> = T extends string[] ? TranslateList<T> : string;
export type TranslateDataFileList = Record<string, string>;
export type TranslateDataFileItem = () => Promise<TranslateDataFileList>;
export type TranslateDataFile = Record<string, TranslateDataFileItem>;
export type TranslatePromiseItem = {
    id: number;
    promise: Promise<TranslateDataFileList | undefined>;
};
/** Translation batch queued for retrieval by locale and language. @keywords translate, batch, queue */
export interface TranslateBatch {
    readonly location: string;
    readonly language: string;
    readonly path: string;
    readonly codes: string[];
    readonly resolves: (() => void)[];
}
/** Prefix for global translation keys. @keywords translate, prefix, global */
export declare const TRANSLATE_GLOBAL_PREFIX = "global";
/** Request debounce timeout in milliseconds for batch translation loading. @keywords translate, timeout, debounce */
export declare const TRANSLATE_TIME_OUT = 160;
// md5:5cc611483b3118288c41edb2a24d88ce true
export type TranslateConfig = {
    url?: string;
    propsName?: string;
    readApi?: boolean;
};
export type TranslateCode = string | string[];
export type TranslateList<T extends TranslateCode[]> = {
    [K in T[number] as K extends readonly string[] ? K[0] : K]: string;
};
export type TranslateItemOrList<T extends TranslateCode> = T extends string[] ? TranslateList<T> : string;
export type TranslateDataFileList = Record<string, string>;
export type TranslateDataFileItem = () => Promise<TranslateDataFileList>;
export type TranslateDataFile = Record<string, TranslateDataFileItem>;
/** Global translation prefix @keywords prefix, global, translate */
export declare const TRANSLATE_GLOBAL_PREFIX = "global";
/** Request timeout for batch loading @keywords timeout, delay, translate */
export declare const TRANSLATE_TIME_OUT = 160;
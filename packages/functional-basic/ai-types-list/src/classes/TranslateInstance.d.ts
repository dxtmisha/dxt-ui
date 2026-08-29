// md5:cae05fcd526de903bd8f6a8064a7e807 true
/** Service for loading, managing, and retrieving localized translated strings. @keywords translate, i18n, localization, locale */
export declare class TranslateInstance {
    /** Creates a translation manager instance. @keywords constructor, init */
    constructor(url?: string, propsName?: string, files?: TranslateFile);
    /** Asynchronously retrieves translated text by code with optional variable replacements. @keywords get, translate, async */
    get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    /** Synchronously retrieves translated text by code with optional variable replacements. @keywords getSync, sync, translate */
    getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    /** Asynchronously retrieves multiple translations by an array of text codes. @keywords getList, batch, translate */
    getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    /** Synchronously retrieves multiple translations by an array of text codes. @keywords getListSync, batch, sync */
    getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    /** Registers translation key(s) to fetch. @keywords add, load, keys */
    add(names: string | string[]): Promise<void>;
    /** Synchronously registers key-value translation pairs. @keywords addSync, register, dictionary */
    addSync(data: Record<string, string>): void;
    /** Adds translations asynchronously via request or directly depending on the execution environment. @keywords addNormalOrSync, environment */
    addNormalOrSync(data: Record<string, string>): Promise<void>;
    /** Synchronously registers translations grouped by location. @keywords addSyncByLocation, location, grouped */
    addSyncByLocation(data: Record<string, Record<string, string>>): void;
    /** Synchronously registers translations from a translation data file. @keywords addSyncByFile, file, import */
    addSyncByFile(data: TranslateDataFile): void;
    /** Sets the endpoint URL for fetching translations. @keywords setUrl, endpoint, config */
    setUrl(url: string): this;
    /** Sets the response property name for translations. @keywords setPropsName, property */
    setPropsName(name: string): this;
    /** Toggles reading translations from the API. @keywords setReadApi, api, toggle */
    setReadApi(value: boolean): this;
}
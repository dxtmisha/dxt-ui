// md5:cae05fcd526de903bd8f6a8064a7e807 true
/** Translation management instance for fetching and resolving localized strings. @keywords translate, i18n, localization, locale */
export declare class TranslateInstance {
    /** Initializes a new translation instance with optional endpoint and files. @keywords init, translate */
    constructor(url?: string, propsName?: string, files?: TranslateFile);
    /** Fetches translation text asynchronously by code with optional replacements. @keywords get, translate, async */
    get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    /** Gets translation text synchronously by code with optional fallback and replacements. @keywords getSync, translate, sync */
    getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    /** Fetches multiple translations asynchronously by code array. @keywords getList, batch, translate */
    getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    /** Gets multiple translations synchronously by code array. @keywords getListSync, batch, sync */
    getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    /** Adds translation codes to be loaded. @keywords add, load, translations */
    add(names: string | string[]): Promise<void>;
    /** Adds translation key-value pairs synchronously. @keywords addSync, register, dictionary */
    addSync(data: Record<string, string>): void;
    /** Adds translations via network request or directly depending on runtime environment. @keywords addNormalOrSync, environment */
    addNormalOrSync(data: Record<string, string>): Promise<void>;
    /** Adds translations grouped by location synchronously. @keywords addSyncByLocation, locale, location */
    addSyncByLocation(data: Record<string, Record<string, string>>): void;
    /** Adds translations synchronously from a file data object. @keywords addSyncByFile, file, import */
    addSyncByFile(data: TranslateDataFile): void;
    /** Sets the API URL endpoint for fetching translations. @keywords setUrl, config, endpoint */
    setUrl(url: string): this;
    /** Sets the property name used for translation lookups. @keywords setPropsName, property, config */
    setPropsName(name: string): this;
    /** Toggles the translation API read mode. @keywords setReadApi, mode, config */
    setReadApi(value: boolean): this;
}
// md5:00ef86994375252e00626db7092a64f3 true
/** Translation service for loading and resolving localized texts. @keywords translate, i18n, localization, dictionary */
export declare class Translate {
    /** Asynchronously retrieves translation text by code with optional replacements. @keywords translate, get, async, i18n */
    static get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    /** Returns a request-isolated TranslateInstance. @keywords translate, instance, context */
    static getItem(): TranslateInstance;
    /** Synchronously retrieves translation text by code with optional replacements. @keywords translate, sync, lookup */
    static getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    /** Asynchronously retrieves multiple translations by key list. @keywords translate, list, batch, async */
    static getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    /** Synchronously retrieves multiple translations by key list. @keywords translate, list, sync */
    static getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    /** Asynchronously loads translated texts for specified codes. @keywords translate, add, load, async */
    static add(names: string | string[]): Promise<void>;
    /** Synchronously registers a dictionary of key-value translations. @keywords translate, addSync, register, dictionary */
    static addSync(data: Record<string, string>): void;
    /** Adds translation data via request or directly depending on environment. @keywords translate, add, hybrid */
    static addNormalOrSync(data: Record<string, string>): Promise<void>;
    /** Synchronously registers translations grouped by location. @keywords translate, location, namespace */
    static addSyncByLocation(data: Record<string, Record<string, string>>): void;
    /** Synchronously registers translations from a structured translation file. @keywords translate, file, import */
    static addSyncByFile(data: TranslateDataFile): void;
    /** Sets the endpoint URL for translation requests. @keywords translate, url, endpoint */
    static setUrl(url: string): void;
    /** Sets the property name used to resolve translations. @keywords translate, property, config */
    static setPropsName(name: string): void;
    /** Toggles the API read mode for fetching translations. @keywords translate, api, mode */
    static setReadApi(value: boolean): void;
    /** Applies translation service configuration. @keywords translate, config, options */
    static setConfig(config: TranslateConfig): void;
}
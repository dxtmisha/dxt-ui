// md5:8c24f2b17c87ed5dd8864d57a60cdda8 true
/** Static wrapper class managing translations and localization via global TranslateInstance singleton. @keywords translate, localization, i18n, dictionary */
export declare class Translate {
    /** Gets translated text by code with optional placeholder replacements. @keywords translate, get, localize, message */
    static get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    /** Returns the global TranslateInstance singleton instance. @keywords instance, singleton, translate */
    static getItem(): TranslateInstance;
    /** Gets translations list for an array of codes asynchronously. @keywords translate, list, batch, async */
    static getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    /** Synchronously gets translations list for an array of codes. @keywords translate, list, sync */
    static getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    /** Synchronously gets translated text by code with optional replacements. @keywords translate, sync, lookup */
    static getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    /** Sets configuration options for translations. @keywords config, configure, translation */
    static setConfig(config?: TranslateConfig): void;
    /** Sets response property name used to extract translations. @keywords property, config, response */
    static setPropsName(name: string): void;
    /** Toggles API reading mode for fetching translations. @keywords api, mode, fetch */
    static setReadApi(value: boolean): void;
    /** Sets API endpoint URL for obtaining translations. @keywords url, endpoint, script */
    static setUrl(url: string): void;
    /** Loads translation texts for provided code or codes asynchronously. @keywords add, load, async */
    static add(names: string | string[]): Promise<void>;
    /** Adds translation data via API query or directly based on runtime environment. @keywords add, query, environment */
    static addNormalOrSync(data: Record<string, string>): Promise<void>;
    /** Synchronously adds key-value translation dictionary. @keywords add, sync, dictionary */
    static addSync(data: Record<string, string>): void;
    /** Synchronously registers translations from file data object. @keywords file, import, sync */
    static addSyncByFile(data: TranslateDataFile): void;
    /** Synchronously registers translations grouped by location. @keywords location, namespace, sync */
    static addSyncByLocation(data: Record<string, Record<string, string>>): void;
}
// md5:00ef86994375252e00626db7092a64f3 true
/** Translation management class for retrieving and configuring localized text. @keywords translate, i18n, localization, l10n */
export declare class Translate {
    /** Retrieves translated text asynchronously by code name with optional replacements. @keywords translate, get, async, localize */
    static get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    /** Returns a request-isolated TranslateInstance singleton. @keywords translate, instance, singleton */
    static getItem(): TranslateInstance;
    /** Retrieves translated text synchronously by code name with optional replacements. @keywords translate, getSync, sync, localization */
    static getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    /** Retrieves a list of translations asynchronously by text codes. @keywords translate, getList, batch, async */
    static getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    /** Retrieves a list of translations synchronously by text codes. @keywords translate, getListSync, batch, sync */
    static getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    /** Registers one or more translation codes to be fetched. @keywords translate, add, preload, async */
    static add(names: string | string[]): Promise<void>;
    /** Adds key-value translation pairs synchronously. @keywords translate, addSync, register, dictionary */
    static addSync(data: Record<string, string>): void;
    /** Adds translations asynchronously or directly based on execution environment. @keywords translate, addNormalOrSync, environment */
    static addNormalOrSync(data: Record<string, string>): Promise<void>;
    /** Adds translations synchronously organized by location. @keywords translate, addSyncByLocation, location */
    static addSyncByLocation(data: Record<string, Record<string, string>>): void;
    /** Registers translations synchronously from a file data object. @keywords translate, addSyncByFile, file, import */
    static addSyncByFile(data: TranslateDataFile): void;
    /** Sets the endpoint URL for fetching translations. @keywords translate, setUrl, endpoint, api */
    static setUrl(url: string): void;
    /** Sets the property name used to extract translation data. @keywords translate, setPropsName, property */
    static setPropsName(name: string): void;
    /** Toggles API reading mode for fetching translations. @keywords translate, setReadApi, api */
    static setReadApi(value: boolean): void;
    /** Sets configuration options for the translation service. @keywords translate, setConfig, options, setup */
    static setConfig(config: TranslateConfig): void;
}
// md5:c6f1179ea57b752f90d07d0deceeaee4 true
/** Class for getting the translated text. @keywords translate, i18n, localization */
export declare class Translate {
    /** Gets translated text by code. @keywords get, translate */
    static get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    /** Returns TranslateInstance singleton. @keywords get, instance, translate */
    static getItem(): TranslateInstance;
    /** Gets translated text by code synchronously. @keywords get, sync, translate */
    static getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    /** Gets a list of translations by codes. @keywords get, list, translate */
    static getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    /** Gets a list of translations by codes synchronously. @keywords get, list, sync, translate */
    static getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    /** Adds translations. @keywords add, translate */
    static add(names: string | string[]): Promise<void>;
    /** Adds translations synchronously. @keywords add, sync, translate */
    static addSync(data: Record<string, string>): void;
    /** Adds translations normally or synchronously based on environment. @keywords add, normal, sync, translate */
    static addNormalOrSync(data: Record<string, string>): Promise<void>;
    /** Adds translations synchronously by location. @keywords add, location, sync, translate */
    static addSyncByLocation(data: Record<string, Record<string, string>>): void;
    /** Adds translations synchronously from file. @keywords add, file, sync, translate */
    static addSyncByFile(data: TranslateDataFile): void;
    /** Sets the translation endpoint URL. @keywords set, url, translate */
    static setUrl(url: string): void;
    /** Sets the property name for request payload. @keywords set, props, name, translate */
    static setPropsName(name: string): void;
    /** Enables or disables API reading mode. @keywords set, api, read, translate */
    static setReadApi(value: boolean): void;
    /** Sets the translation configuration. @keywords set, config, translate */
    static setConfig(config: TranslateConfig): void;
}
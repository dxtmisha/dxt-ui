// md5:10d44306a76906780e23591288c0588f true
/** @keywords Geo, localization, country, timezone, language */
export declare class Geo {
    /** @keywords getObject, instance */
    static getObject(): GeoItemInstance;
    /** @keywords get, current, geo */
    static get(): GeoItemFull;
    /** @keywords getCountry, country */
    static getCountry(): string;
    /** @keywords getLanguage, language */
    static getLanguage(): string;
    /** @keywords getStandard, standard, locale */
    static getStandard(): string;
    /** @keywords getFirstDay, week */
    static getFirstDay(): string;
    /** @keywords getLocation, location */
    static getLocation(): string;
    /** @keywords getLocationCountry, country */
    static getLocationCountry(): string;
    /** @keywords getLocationLanguage, language */
    static getLocationLanguage(): string;
    /** @keywords getItem, geo */
    static getItem(): GeoItemFull;
    /** @keywords getList, countries, regions */
    static getList(): GeoItem[];
    /** @keywords getByCode, geo */
    static getByCode(code?: string): GeoItemFull;
    /** @keywords getByCodeFull, locale */
    static getByCodeFull(code: string): GeoItem | undefined;
    /** @keywords getByCountry, country */
    static getByCountry(country: string): GeoItem | undefined;
    /** @keywords getByLanguage, language */
    static getByLanguage(language: string): GeoItem | undefined;
    /** @keywords getTimezone, timezone */
    static getTimezone(): number;
    /** @keywords getTimezoneFormat, timezone */
    static getTimezoneFormat(): string;
    /** @keywords find, geo */
    static find(code: string): GeoItemFull;
    /** @keywords toStandard, geo */
    static toStandard(item: GeoItem): string;
    /** @keywords set, location */
    static set(code: string, save?: boolean): void;
    /** @keywords setTimezone, timezone */
    static setTimezone(timezone: number): void;
    /** @keywords setValueDefault, default */
    static setValueDefault(code?: string | (() => string)): void;
}
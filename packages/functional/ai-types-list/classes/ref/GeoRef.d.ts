// md5:fa7b73af8d1942ecfda485a9a62544a7 true
import { type ComputedRef, type Ref } from 'vue';
import { type GeoItemFull } from '@dxtmisha/functional-basic';
/** Reactive class for geographic and locale data management. @keywords geo, location, country, language, locale */
export declare class GeoRef {
    /** Returns reactive object with full geographic information. @keywords geo, country, info, ref */
    static get(): Ref<GeoItemFull>;
    /** Returns reactive string with current country code. @keywords country, code, geo */
    static getCountry(): ComputedRef<string>;
    /** Returns reactive string with current language code. @keywords language, code, locale */
    static getLanguage(): ComputedRef<string>;
    /** Returns reactive string with full standard locale format. @keywords standard, locale, format */
    static getStandard(): ComputedRef<string>;
    /** Returns reactive string representing first day of the week. @keywords first day, week, calendar */
    static getFirstDay(): ComputedRef<string>;
    /** Returns reactive string with current location identifier. @keywords location, geo */
    static getLocation(): ComputedRef<string>;
    /** Returns reactive string with current country code from location. @keywords location, country */
    static getLocationCountry(): ComputedRef<string>;
    /** Returns reactive string with current language code from location. @keywords location, language */
    static getLocationLanguage(): ComputedRef<string>;
    /** Updates geographic data by locale or country code. @keywords set, update, locale, geo */
    static set(code: string): void;
    /** Sets default country code value or resolver function. @keywords default, fallback, country */
    static setValueDefault(code?: string | (() => string)): void;
}
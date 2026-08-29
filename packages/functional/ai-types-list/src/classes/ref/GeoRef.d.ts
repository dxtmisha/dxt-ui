// md5:fa7b73af8d1942ecfda485a9a62544a7 true
import { type ComputedRef, type Ref } from 'vue';
import { type GeoItemFull } from '@dxtmisha/functional-basic';

/** Reactive manager for geographic and locale data. @keywords geo location country language locale */
export declare class GeoRef {
    /** Returns reactive full geographic information object. @keywords geo info country */
    static get(): Ref<GeoItemFull>;
    /** Returns reactive current country code. @keywords country code */
    static getCountry(): ComputedRef<string>;
    /** Returns reactive current language code. @keywords language code */
    static getLanguage(): ComputedRef<string>;
    /** Returns reactive standard locale format string. @keywords standard locale format */
    static getStandard(): ComputedRef<string>;
    /** Returns reactive first day of the week for current locale. @keywords first day week locale */
    static getFirstDay(): ComputedRef<string>;
    /** Returns reactive current location string. @keywords location */
    static getLocation(): ComputedRef<string>;
    /** Returns reactive country code resolved from location. @keywords location country */
    static getLocationCountry(): ComputedRef<string>;
    /** Returns reactive language code resolved from location. @keywords location language */
    static getLocationLanguage(): ComputedRef<string>;
    /** Updates geographic data by code or locale string. @param code Country code or full language-country format. @keywords set geo locale */
    static set(code: string): void;
    /** Sets default fallback code for country/locale. @param code Default code or resolver function. @keywords default code fallback */
    static setValueDefault(code?: string | (() => string)): void;
}
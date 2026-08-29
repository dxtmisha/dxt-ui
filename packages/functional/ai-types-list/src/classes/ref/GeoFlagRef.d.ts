// md5:6f7f3d81c5aae1d46af7cf6c26e855ae true
import { type ComputedRef } from 'vue';
import { type GeoFlagItem, type GeoFlagNational } from '@dxtmisha/functional-basic';

/** Reactive manager for country and language flags. @keywords geo, flag, country, language */
export declare class GeoFlagRef {
    /** Initializes flag manager with an optional country/language code. @keywords constructor, flag, geo */
    constructor(code?: RefOrNormal<string | undefined>);
    /** Retrieves the current country code. @keywords code, country */
    getCode(): string;
    /** Returns reactive country and flag information. @keywords country, flag, info */
    get(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>;
    /** Returns reactive language and flag information. @keywords language, flag, info */
    getLanguage(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>;
    /** Returns a reactive link/path to the flag asset. @keywords flag, url, icon */
    getFlag(code?: RefOrNormal<string>): ComputedRef<string | undefined>;
    /** Returns a reactive list of country flag items by code array. @keywords countries, list, flag */
    getList(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
    /** Returns a reactive list of language flag items by code array. @keywords languages, list, flag */
    getListLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
    /** Returns a reactive list of countries localized in their national languages. @keywords national, country, localization */
    getNational(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
    /** Returns a reactive list of languages localized in their national languages. @keywords national, language, localization */
    getNationalLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
}
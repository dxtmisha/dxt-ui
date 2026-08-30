// md5:6f7f3d81c5aae1d46af7cf6c26e855ae true
import { type ComputedRef } from 'vue';
import { type GeoFlagItem, type GeoFlagNational } from '@dxtmisha/functional-basic';

/** Reactive wrapper for managing geo flags and country/language information. @keywords geo, flag, country, language, reactive */
export declare class GeoFlagRef {
    /** Initializes the reactive geo flag manager with an optional country or language code. @keywords constructor, init */
    constructor(code?: RefOrNormal<string | undefined>);
    /** Retrieves the resolved country code. @keywords country_code, get_code */
    getCode(): string;
    /** Retrieves reactive country and flag metadata. @keywords country, flag_item, metadata */
    get(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>;
    /** Retrieves reactive language and flag metadata. @keywords language, flag_item, metadata */
    getLanguage(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>;
    /** Retrieves a reactive link or URL to the flag asset. @keywords flag_url, flag_link */
    getFlag(code?: RefOrNormal<string>): ComputedRef<string | undefined>;
    /** Retrieves a reactive list of country flag items filtered by codes. @keywords country_list, flag_list */
    getList(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
    /** Retrieves a reactive list of language flag items filtered by codes. @keywords language_list, flag_list */
    getListLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
    /** Retrieves a reactive list of country flag items in their national language. @keywords national_names, country_national */
    getNational(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
    /** Retrieves a reactive list of language flag items in their national language. @keywords national_languages, language_national */
    getNationalLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
}
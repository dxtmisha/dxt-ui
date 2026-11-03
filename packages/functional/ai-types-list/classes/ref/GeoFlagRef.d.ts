// md5:f9cb51ae98f4ddea6c64216f79d22a0a true
import { type ComputedRef } from 'vue';
import { type GeoFlagItem, type GeoFlagNational } from '@dxtmisha/functional-basic';

/** Reactive wrapper around GeoFlag for country, language metadata, and flag icon identifiers. @keywords geo, flag, country, language, reactive */
export declare class GeoFlagRef {
    /** Initializes GeoFlagRef with an optional locale, country, or language code. @keywords constructor, init, geo */
    constructor(code?: RefOrNormal<string | undefined>);
    /** Returns the current base code as a string. @keywords code, locale, country, language */
    getCode(): string;
    /** Returns computed country metadata for the explicit or base code. @keywords country, metadata, geo, item */
    get(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>;
    /** Returns computed language metadata for the explicit or base code. @keywords language, metadata, geo, item */
    getLanguage(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>;
    /** Returns computed flag icon identifier for the explicit or base code. @keywords flag, icon, country */
    getFlag(code?: RefOrNormal<string>): ComputedRef<string | undefined>;
    /** Returns computed country flag items, optionally filtered by codes. @keywords list, countries, flags */
    getList(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
    /** Returns computed language flag items, optionally filtered by codes. @keywords list, languages, flags */
    getListLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
    /** Returns computed country names in national languages, optionally filtered by codes. @keywords national, country, native */
    getNational(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
    /** Returns computed language names in national languages, optionally filtered by codes. @keywords national, language, native */
    getNationalLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
}
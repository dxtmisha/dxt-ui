// md5:b9a7f2fa892409eea61942f42c1c859f true
import { ComputedRef } from 'vue';
import { GeoFlagItem, GeoFlagNational } from '@dxtmisha/functional-basic';

/** Geo flag reactive reference manager. @keywords geo, flag, country, language */
export declare class GeoFlagRef {
    /**
     * Creates a new GeoFlagRef instance.
     * @param code Country or language code
     */
    constructor(code?: RefOrNormal<string | undefined>);
    /** Gets the current country code. @keywords code, get */
    getCode(): string;
    /** Gets reactive country flag item information. @keywords country, flag, item */
    get(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>;
    /** Gets reactive language flag item information. @keywords language, flag, item */
    getLanguage(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>;
    /** Gets reactive flag image URL or source. @keywords flag, link, image */
    getFlag(code?: RefOrNormal<string>): ComputedRef<string | undefined>;
    /** Gets a reactive list of country flag items. @keywords list, country, flags */
    getList(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
    /** Gets a reactive list of language flag items. @keywords list, language, flags */
    getListLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
    /** Gets reactive country flag items in national representation. @keywords national, country, list */
    getNational(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
    /** Gets reactive language flag items in national representation. @keywords national, language, list */
    getNationalLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
}
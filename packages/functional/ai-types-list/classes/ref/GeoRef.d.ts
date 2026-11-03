// md5:6c9c0b031a130e89361b1882fed7d9c8 true
import { type ComputedRef, type Ref } from 'vue';
import { type GeoItemFull } from '@dxtmisha/functional-basic';
/** Static reactive facade for geographic context. @keywords geo, reactive, facade, locale, country */
export declare class GeoRef {
    /** Returns cached reactive reference to full geographic metadata. @keywords geo, metadata, ref */
    static get(): Ref<GeoItemFull>;
    /** Sets current Geo locale with persistence and updates reactive state. @keywords set, locale, country, language */
    static set(code: string): void;
    /** Returns computed reference to country code. @keywords country, code, computed */
    static getFirstDay(): ComputedRef<string>;
    /** Returns computed reference to country metadata language. @keywords language, lang, code */
    static getLocation(): ComputedRef<string>;
    /** Returns computed reference to requested location country segment. @keywords location, country, segment */
    static getLocationLanguage(): ComputedRef<string>;
    /** Returns computed reference to standard locale code. @keywords standard, locale, code */
    static setValueDefault(code?: string | (() => string | undefined)): void;
}
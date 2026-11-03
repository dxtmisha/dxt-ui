// md5:e076fb90628ae36e54cd7a2e28ed6905 true
export type GeoDate = 'full' | 'datetime' | 'date' | 'year-month' | 'year' | 'month' | 'day' | 'day-month' | 'time' | 'hour-minute' | 'hour' | 'minute' | 'second';
export type GeoFirstDay = 1 | 6 | 0;
/** Default first day of the week ('Mo' = Monday). @keywords calendar, first_day, locale */
export declare const GEO_DEFAULT_FIRST_DAY = "Mo";
export type GeoHours = '12' | '24';
export type GeoTimeZoneStyle = 'minute' | 'hour' | 'ISO8601' | 'RFC';
/** Geographic item configuration for country, language, and regional formats. @keywords geo, country, language, locale, unit */
export interface GeoItem {
    country: string;
    countryAlternative?: string[];
    language: string;
    languageAlternative?: string[];
    firstDay?: string | null;
    zone?: string | null;
    phoneCode?: string;
    phoneWithin?: string;
    phoneMask?: string | string[];
    nameFormat?: 'fl' | 'fsl' | 'lf' | 'lsf' | string;
    unit?: {
        'millimeter'?: string;
        'centimeter'?: string;
        'meter'?: string;
        'kilometer'?: string;
        'square-meter'?: string;
        'hectare'?: string;
        'gram'?: string;
        'kilogram'?: string;
        'tonne'?: string;
        'milliliter'?: string;
        'liter'?: string;
        'celsius'?: string;
        'kilometer-per-hour'?: string;
    };
}
/** Complete geographic item with resolved locale and location identifiers. @keywords geo, location, locale, country */
export interface GeoItemFull extends Omit<GeoItem, 'firstDay'> {
    standard: string;
    firstDay: string;
    location: string;
    locationCountry: string;
    locationLanguage: string;
}
/** Country flag selection and display item. @keywords flag, country, language, option */
export interface GeoFlagItem {
    language: string;
    languageCode: string;
    country: string;
    countryCode: string;
    standard: string;
    icon?: string;
    label: string;
    value: string;
    phoneCode?: string;
}
/** Extended geographic flag item containing localized national language and country names. @keywords flag, national, localization */
export interface GeoFlagNational extends GeoFlagItem {
    description: string;
    nationalLanguage: string;
    nationalCountry: string;
}
/** Phone dialing configuration and mask metadata for a country. @keywords phone, country_code, mask, dialing */
export interface GeoPhoneValue {
    phone: number;
    within: number;
    mask: string[];
    value: string;
}
/** Node in the internal phone prefix tree (Trie) for number lookup. @keywords phone, trie, prefix_tree, lookup */
export interface GeoPhoneMap {
    items: GeoPhoneValue[];
    info: GeoPhoneValue | undefined;
    value: string | undefined;
    mask: string[];
    maskFull: string[];
    next: Record<string, GeoPhoneMap>;
}
/** Result of matching a phone number against the prefix tree. @keywords phone, lookup, result, match */
export interface GeoPhoneMapInfo {
    item?: GeoPhoneMap;
    phone?: string;
}
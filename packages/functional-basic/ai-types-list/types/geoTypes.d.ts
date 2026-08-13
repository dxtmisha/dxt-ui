// md5:85a2d400c450f5e21f3ebeadfe2a129d true
/** @keywords geo, date, format, types */
export type GeoDate = 'full' | 'datetime' | 'date' | 'year-month' | 'year' | 'month' | 'day' | 'day-month' | 'time' | 'hour-minute' | 'hour' | 'minute' | 'second';
/** @keywords geo, weekday, first, day */
export type GeoFirstDay = 1 | 6 | 0;
/** @keywords geo, hours, time, format */
export type GeoHours = '12' | '24';
/** @keywords geo, timezone, style, format */
export type GeoTimeZoneStyle = 'minute' | 'hour' | 'ISO8601' | 'RFC';
/** @keywords geo, item, country, language */
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
/** @keywords geo, item, full, standard */
export interface GeoItemFull extends Omit<GeoItem, 'firstDay'> {
    standard: string;
    firstDay: string;
    location: string;
    locationCountry: string;
    locationLanguage: string;
}
/** @keywords geo, flag, item, country */
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
/** @keywords geo, flag, national, language */
export interface GeoFlagNational extends GeoFlagItem {
    description: string;
    nationalLanguage: string;
    nationalCountry: string;
}
/** @keywords geo, phone, value, metadata */
export interface GeoPhoneValue {
    phone: number;
    within: number;
    mask: string[];
    value: string;
}
/** @keywords geo, phone, map, trie */
export interface GeoPhoneMap {
    items: GeoPhoneValue[];
    info: GeoPhoneValue | undefined;
    value: string | undefined;
    mask: string[];
    maskFull: string[];
    next: Record<string, GeoPhoneMap>;
}
/** @keywords geo, phone, map, info */
export interface GeoPhoneMapInfo {
    item?: GeoPhoneMap;
    phone?: string;
}
// md5:85a2d400c450f5e21f3ebeadfe2a129d true
export type GeoDate = 'full' | 'datetime' | 'date' | 'year-month' | 'year' | 'month' | 'day' | 'day-month' | 'time' | 'hour-minute' | 'hour' | 'minute' | 'second';
export type GeoFirstDay = 1 | 6 | 0;
export type GeoHours = '12' | '24';
export type GeoTimeZoneStyle = 'minute' | 'hour' | 'ISO8601' | 'RFC';

/** Geographic configuration for country, language, units, and phone formatting. */
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

/** Extended geographic item with resolved location and locale metadata. */
export interface GeoItemFull extends Omit<GeoItem, 'firstDay'> {
  standard: string;
  firstDay: string;
  location: string;
  locationCountry: string;
  locationLanguage: string;
}

/** Geographic flag and locale option item. */
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

/** Extended geographic flag item containing native/national localization strings. */
export interface GeoFlagNational extends GeoFlagItem {
  description: string;
  nationalLanguage: string;
  nationalCountry: string;
}

/** Phone configuration metadata for a country prefix and formatting rules. */
export interface GeoPhoneValue {
  phone: number;
  within: number;
  mask: string[];
  value: string;
}

/** Node in the internal phone prefix tree (Trie). */
export interface GeoPhoneMap {
  items: GeoPhoneValue[];
  info: GeoPhoneValue | undefined;
  value: string | undefined;
  mask: string[];
  maskFull: string[];
  next: Record<string, GeoPhoneMap>;
}

/** Country lookup result based on phone prefix parsing. */
export interface GeoPhoneMapInfo {
  item?: GeoPhoneMap;
  phone?: string;
}
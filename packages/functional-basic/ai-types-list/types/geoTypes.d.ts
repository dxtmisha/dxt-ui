// md5:85a2d400c450f5e21f3ebeadfe2a129d true
export type GeoDate = 'full' | 'datetime' | 'date' | 'year-month' | 'year' | 'month' | 'day' | 'day-month' | 'time' | 'hour-minute' | 'hour' | 'minute' | 'second';
export type GeoFirstDay = 1 | 6 | 0;
export type GeoHours = '12' | '24';
export type GeoTimeZoneStyle = 'minute' | 'hour' | 'ISO8601' | 'RFC';

/** Geographic configuration item containing country, language, and locale formatting rules @keywords geo, locale, country, language */
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

/** Extended geographic item with resolved required locale fields @keywords geo, locale, full */
export interface GeoItemFull extends Omit<GeoItem, 'firstDay'> {
  standard: string;
  firstDay: string;
  location: string;
  locationCountry: string;
  locationLanguage: string;
}

/** Geographic flag and country display metadata @keywords flag, country, language */
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

/** Geographic flag item with localized native language descriptions @keywords flag, national, localized */
export interface GeoFlagNational extends GeoFlagItem {
  description: string;
  nationalLanguage: string;
  nationalCountry: string;
}

/** Country phone prefix and mask pattern metadata @keywords phone, mask, countryCode */
export interface GeoPhoneValue {
  phone: number;
  within: number;
  mask: string[];
  value: string;
}

/** Prefix tree node for phone code lookup and mask formatting @keywords phone, trie, prefix, mask */
export interface GeoPhoneMap {
  items: GeoPhoneValue[];
  info: GeoPhoneValue | undefined;
  value: string | undefined;
  mask: string[];
  maskFull: string[];
  next: Record<string, GeoPhoneMap>;
}

/** Result of a phone number lookup against the prefix tree @keywords phone, lookup, result */
export interface GeoPhoneMapInfo {
  item?: GeoPhoneMap;
  phone?: string;
}
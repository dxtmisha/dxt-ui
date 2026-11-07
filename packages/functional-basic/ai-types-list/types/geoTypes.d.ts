// md5:104c32a6aefdc8bc4547fd700612e027 true
export type GeoDate = 'full' | 'datetime' | 'date' | 'year-month' | 'year' | 'month' | 'day' | 'day-month' | 'time' | 'hour-minute' | 'hour' | 'minute' | 'second';
/** First day of week code: 0 (Sunday), 1 (Monday), 5 (Friday), 6 (Saturday). @keywords geo, firstDay, week */
export type GeoFirstDay = 1 | 6 | 5 | 0;
/** Default first day of the week ('Mo' = Monday). @keywords geo, firstDay, default */
export declare const GEO_DEFAULT_FIRST_DAY = "Mo";
export type GeoHours = '12' | '24';
export type GeoTimeZoneStyle = 'minute' | 'hour' | 'ISO8601' | 'RFC';
/** Geographic item configuration for country, language, locale, and units. @keywords geo, country, language, locale, units */
export interface GeoItem {
  /** Country code. */
  country: string;
  /** Alternative country codes. */
  countryAlternative?: string[];
  /** Language code. */
  language: string;
  /** Alternative language codes. */
  languageAlternative?: string[];
  /** First day of week identifier. */
  firstDay?: string | null;
  /** Timezone identifier. */
  zone?: string | null;
  /** Phone country calling code. */
  phoneCode?: string;
  /** Phone prefix for domestic calls. */
  phoneWithin?: string;
  /** Phone number formatting mask or array of masks. */
  phoneMask?: string | string[];
  /** Name format pattern. */
  nameFormat?: 'fl' | 'fsl' | 'lf' | 'lsf' | string;
  /** Units of measurement configuration. */
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
/** Extended geographic item with required locale and location fields. @keywords geo, locale, location */
export interface GeoItemFull extends Omit<GeoItem, 'firstDay'> {
  /** Standard locale code. */
  standard: string;
  /** First day of week identifier. */
  firstDay: string;
  /** Current location string. */
  location: string;
  /** Resolved country code from location. */
  locationCountry: string;
  /** Resolved language code from location. */
  locationLanguage: string;
}
/** Geographic flag item for country flag selection and display. @keywords flag, country, language, selector */
export interface GeoFlagItem {
  /** Language display name. */
  language: string;
  /** Language code. */
  languageCode: string;
  /** Country display name. */
  country: string;
  /** Country code. */
  countryCode: string;
  /** Standard locale code. */
  standard: string;
  /** Flag icon identifier. */
  icon?: string;
  /** Display label. */
  label: string;
  /** Item value for selection. */
  value: string;
  /** Phone country calling code. */
  phoneCode?: string;
}
/** Extended geographic flag item with native language information. @keywords flag, national language, native */
export interface GeoFlagNational extends GeoFlagItem {
  /** Description in national language. */
  description: string;
  /** Language name in national language. */
  nationalLanguage: string;
  /** Country name in national language. */
  nationalCountry: string;
}
/** Phone configuration metadata for a country. @keywords phone, country code, mask, dialing */
export interface GeoPhoneValue {
  /** Phone country code digits. */
  phone: number;
  /** Internal domestic dialing rule code. */
  within?: string;
  /** Array of phone mask patterns assigned to the country. */
  mask: string[];
  /** ISO 3166 country identifier. */
  value: string;
}
/** Node in the internal phone prefix tree (Trie). @keywords phone, trie, prefix tree, phone map */
export interface GeoPhoneMap {
  /** List of all items available in this tree branch. */
  items: GeoPhoneValue[];
  /** Phone metadata if the current node is a complete code. */
  info: GeoPhoneValue | undefined;
  /** Country identifier for this node. */
  value: string | undefined;
  /** Array of masks with substituted internal symbols. */
  mask: string[];
  /** Full masks including the international code. */
  maskFull: string[];
  /** Pointers to subsequent digits in the search tree. */
  next: Record<string, GeoPhoneMap>;
}
/** Result of searching a country by phone number prefix. @keywords phone search, lookup, phone map */
export interface GeoPhoneMapInfo {
  /** Matched tree node with country and mask information. */
  item?: GeoPhoneMap;
  /** Remaining part of the number after separating the country code. */
  phone?: string;
}
/** Extended phone search result with normalized digits and formatted number. @keywords phone search, phone format, formatted phone */
export interface GeoPhoneMapInfoFull extends GeoPhoneMapInfo {
  /** Full phone number with digits only. */
  full: string;
  /** Formatted phone number according to the mask. */
  format: string;
}
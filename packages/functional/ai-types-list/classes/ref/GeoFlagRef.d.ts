// md5:d89227707df54581a9a1843795e90e8c true
import { type ComputedRef } from 'vue';
import { type GeoFlagItem, type GeoFlagNational } from '@dxtmisha/functional-basic';

/** Reactive wrapper around GeoFlag for country and language metadata and flag icon identifiers. @keywords geo, flag, country, language, locale, reactive */
export declare class GeoFlagRef {
  /** Initializes GeoFlagRef with an optional locale, country, or language code ref. @keywords constructor, geo, flag, init */
  constructor(code?: RefOrNormal<string | undefined>);
  /** Returns country metadata for the specified or current base code. @keywords country, metadata, flag */
  get(code?: RefOrNormal<string | undefined>): ComputedRef<GeoFlagItem | undefined>;
  /** Returns the current base code as a string. @keywords code, locale, country, language */
  getCode(): string;
  /** Returns the flag icon identifier for the specified or current base code. @keywords flag, icon, identifier */
  getFlag(code?: RefOrNormal<string | undefined>): ComputedRef<string | undefined>;
  /** Returns language metadata for the specified or current base code. @keywords language, metadata */
  getLanguage(code?: RefOrNormal<string | undefined>): ComputedRef<GeoFlagItem | undefined>;
  /** Returns country flag items, optionally filtered by codes. @keywords countries, list, flags */
  getList(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
  /** Returns language flag items, optionally filtered by codes. @keywords languages, list, flags */
  getListLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
  /** Returns country names in their national languages. @keywords country, national, names */
  getNational(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
  /** Returns language names in their national languages. @keywords language, national, names */
  getNationalLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
}
// md5:e458e67619d5bcd766203e52201f0289 true
import { ComputedRef, Ref } from 'vue';
import { GeoItemFull } from '@dxtmisha/functional-basic';

/** Geo reference reactive manager class @keywords geo ref country language */
export declare class GeoRef {
	/** Get reactive geographic full item @keywords get geo item */
	static get(): Ref<GeoItemFull>;
	/** Get current country code @keywords country code */
	static getCountry(): ComputedRef<string>;
	/** Get current language code @keywords language code */
	static getLanguage(): ComputedRef<string>;
	/** Get standard format string @keywords standard locale */
	static getStandard(): ComputedRef<string>;
	/** Get first day of the week @keywords first day */
	static getFirstDay(): ComputedRef<string>;
	/** Get current location string @keywords location */
	static getLocation(): ComputedRef<string>;
	/** Get country from location @keywords location country */
	static getLocationCountry(): ComputedRef<string>;
	/** Get language from location @keywords location language */
	static getLocationLanguage(): ComputedRef<string>;
	/** Set geographic code @keywords set geo */
	static set(code: string): void;
	/** Set default geographic value @keywords default geo */
	static setValueDefault(code?: string | (() => string)): void;
}
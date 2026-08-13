// md5:539893259551b4e2ccb3c62de076b4c5 true
import { RouteLocationRaw, Router, _RouterClassic } from 'vue-router';

/**
 * Router management class.
 * @keywords router, navigation, ref, link, href
 */
export declare class RouterItemRef {
	/** Get router instance. @keywords router, get */
	static get(): _RouterClassic;
	/** Returns the link by name. @keywords router, link, resolve */
	static getLink(name: string, params?: any, query?: any): string | undefined;
	/** Returns the link property by name. @keywords router, href */
	static getHref(name?: string, params?: any, query?: any): ConstrHrefProps;
	/** Site path change. @keywords router, push, navigate */
	static push(to: string | RouteLocationRaw): void;
	/** Set router instance. @keywords router, set */
	static set(router: Router): void;
	/** Set router instance only once. @keywords router, set, once */
	static setOneTime(router: Router): void;
	/** Converts the raw route location to href properties. @keywords router, href, raw */
	static rawToHref(to?: string | RouteLocationRaw): ConstrHrefProps;
}
// md5:8f0ceac558da924375efe8430f3b4898 true
import type { LocationQueryRaw, RouteLocationRaw, RouteParamsRawGeneric, Router } from 'vue-router';
/** Static facade for managing and accessing the global Vue Router instance. @keywords router facade navigation link href */
export declare class RouterItemRef {
    /** Returns the registered Vue Router instance if available. @keywords router get instance */
    static get(): import("vue-router")._RouterClassic;
    /** Resolves a named route to an href string, or undefined if unavailable. @keywords resolve link route url href */
    static getLink(name: string, params?: RouteParamsRawGeneric, query?: LocationQueryRaw, hash?: string): string | undefined;
    /** Returns an href object for a resolved route, or an empty object if unavailable. @keywords route href link props */
    static getHref(name?: string, params?: RouteParamsRawGeneric, query?: LocationQueryRaw, hash?: string): ConstrHrefProps;
    /** Navigates to the specified route location using the registered router. @keywords navigate push route */
    static push(to: string | RouteLocationRaw): void;
    /** Stores or replaces the active Vue Router instance. @keywords set register router instance */
    static set(router: Router): void;
    /** Registers the Vue Router instance only if no router has been stored. @keywords set router once singleton */
    static setOneTime(router: Router): void;
    /** Converts a raw route location into href properties preserving params, query, and hash. @keywords raw route href resolve location */
    static rawToHref(to?: string | RouteLocationRaw): ConstrHrefProps;
}
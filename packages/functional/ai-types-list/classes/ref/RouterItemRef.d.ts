// md5:da4edadf1c23f8627705065cadc4352e true
import type { RouteLocationRaw, Router } from 'vue-router';
/** Router management and navigation utility. @keywords router, navigation, vue-router */
export declare class RouterItemRef {
    /** Retrieves the active router instance. @keywords router instance, get router */
    static get(): import("vue-router")._RouterClassic;
    /** Resolves and returns a URL link path by route name. @keywords get link, route url, resolve route */
    static getLink(name: string, params?: any, query?: any): string | undefined;
    /** Resolves href properties for a route by name. @keywords get href, link props, route href */
    static getHref(name?: string, params?: any, query?: any): ConstrHrefProps;
    /** Navigates to a target route location. @keywords navigate, router push, route change */
    static push(to: string | RouteLocationRaw): void;
    /** Sets the global router instance. @keywords set router, register router */
    static set(router: Router): void;
    /** Sets the router instance only if it has not been set previously. @keywords set router once, init router */
    static setOneTime(router: Router): void;
    /** Converts a raw route location into href properties. @keywords raw to href, route location, href builder */
    static rawToHref(to?: string | RouteLocationRaw): ConstrHrefProps;
}
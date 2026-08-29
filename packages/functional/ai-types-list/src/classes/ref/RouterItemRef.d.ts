// md5:da4edadf1c23f8627705065cadc4352e true
import type { RouteLocationRaw, Router } from 'vue-router';

/** Router management utility class. @keywords router, navigation, routing */
export declare class RouterItemRef {
    /** Gets the current router instance. @keywords router, get-instance */
    static get(): import("vue-router")._RouterClassic;
    /** Resolves route path link by name, parameters, and query. @param name Route name @keywords route-link, path */
    static getLink(name: string, params?: any, query?: any): string | undefined;
    /** Generates href link properties by route name, parameters, and query. @param name Route name @keywords href, route-props */
    static getHref(name?: string, params?: any, query?: any): ConstrHrefProps;
    /** Navigates to a new site route location. @param to Destination path or route location @keywords push, navigate */
    static push(to: string | RouteLocationRaw): void;
    /** Sets the global router instance. @param router Router instance @keywords set-router, init */
    static set(router: Router): void;
    /** Sets the router instance only once if not previously set. @param router Router instance @keywords set-once, init-router */
    static setOneTime(router: Router): void;
    /** Converts raw route location into href properties object. @param to Raw route location @keywords raw-href, location-converter */
    static rawToHref(to?: string | RouteLocationRaw): ConstrHrefProps;
}
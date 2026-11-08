// md5:21183b83db4d1b599781da42ced3898c true
import type { LocationQueryRaw, RouteLocationRaw, RouteParamsRawGeneric, Router } from 'vue-router';
/** Static facade for an installed Vue Router instance resolving routes and managing navigation. @keywords vue router facade navigation href */
export declare class RouterItemRef {
    /** Returns the registered Vue Router instance, or undefined when none is installed. @keywords get router instance */
    static get(): Router | undefined;
    /** Stores or replaces the router in the current context. @keywords set register router */
    static set(router: Router): void;
    /** Returns an href object for a resolved route, or an empty object if unresolved. @keywords get href route link */
    static getHref(name?: string, params?: RouteParamsRawGeneric, query?: LocationQueryRaw, hash?: string): ConstrHrefProps;
    /** Resolves a named route location to an href string, or undefined without a router. @keywords resolve link url href */
    static getLink(name: string, params?: RouteParamsRawGeneric, query?: LocationQueryRaw, hash?: string): string | undefined;
    /** Registers the router only if no router has been stored yet. @keywords set router once singleton */
    static setOneTime(router: Router): void;
    /** Initiates router navigation to the specified target location. @keywords push navigate router */
    static push(to: string | RouteLocationRaw): void;
    /** Converts a raw route location to href properties, retaining params, query, and hash. @keywords raw route location href */
    static rawToHref(to?: string | RouteLocationRaw): ConstrHrefProps;
}
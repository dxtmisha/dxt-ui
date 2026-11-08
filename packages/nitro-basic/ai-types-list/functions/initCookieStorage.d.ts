// md5:0f4c6332274785c6cdfaa294ca34130e true
import type { App } from 'vue';
/** Initializes the cookie storage plugin for the Vue application from an HTTP request. @keywords cookie, storage, plugin, request, vue */
export declare function initCookieStorage<T>(app: App<T>, request: Request): {
    cookie: string;
};
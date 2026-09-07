// md5:4eb52e7bf7f84e2ac98f3cb1f2967479 true
import type { App } from 'vue';

/** Initializes the cookie storage plugin for the Vue application. @keywords cookie, storage, plugin, vue, request */
export declare function initCookieStorage<T>(app: App<T>, request: Request): {
    cookie: string;
};
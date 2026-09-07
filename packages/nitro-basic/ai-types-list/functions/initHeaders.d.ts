// md5:c0c24ba35506872cad4dfaa5dd08f2ac true
import type { App } from 'vue';

/** Initializes API headers and provides them to the Vue application instance. @keywords api headers, provide headers, app setup */
export declare function initHeaders<T>(app: App<T>): {
    headers: Headers;
};
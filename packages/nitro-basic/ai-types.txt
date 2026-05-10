1) All these methods are in the @dxtmisha/nitro-basic library.
2) Everything that is exported can be used.
3) Use what is in this library if it exists; do not use other libraries if there is an analogue here. Do not create new ones if an analogue already exists here.

The following is the content of "exports" from package.json:
{
  ".": {
    "import": "./dist/library.js",
    "types": "./dist/library.d.ts"
  },
  "./plugin": {
    "import": "./dist/library-plugin.js",
    "types": "./dist/library-plugin.d.ts"
  },
  "./ai-types": "./ai-types.txt",
  "./style.css": "./dist/style.css",
  "./types/*": "./dist/*",
  "./types/**/*.d.ts": "./dist/**/*.d.ts"
}

// File: composables/useHeaders.d.ts
/** Get request headers.
 * @param name Header name */
export declare function useHeaders(name: string): string | undefined;
export declare function useHeaders(): Headers | undefined;
// File: functions/getRequestOrigin.d.ts
/** Get origin from request URL.
 * @param request HTTP request */
export declare function getRequestOrigin(request: Request): string;
// File: functions/getRequestUrl.d.ts
/** Get pathname from request URL.
 * @param request HTTP request */
export declare function getRequestUrl(request: Request): string;
// File: functions/initApi.d.ts
/** Init API client; sets base origin for server-side requests.
 * @param request incoming server request */
export declare function initApi(request: Request): void;
// File: functions/initClientRouter.d.ts
/** Wait for server-side router readiness before rendering.
 * @param router Vue Router instance */
export declare function initClientRouter(router: Router | undefined): Promise<void>;
// File: functions/initCookieStorage.d.ts
/** Init cookie storage plugin.
 * @param app Vue app instance
 * @param request HTTP request */
export declare function initCookieStorage<T>(app: App<T>, request: Request): void;
// File: functions/initHeaders.d.ts
/** Init API headers and provide to application.
 * @param app root component */
export declare function initHeaders<T>(app: App<T>): void;
// File: functions/initPluginApiCache.d.ts
/** Initialize API cache.
 * @param storageKey Storage key prefix
 * @param cacheStepAgeClearOld Cache cleanup threshold */
export declare function initPluginApiCache(storageKey?: string, cacheStepAgeClearOld?: number): void;
// File: functions/initPluginBasic.d.ts
/** Initialize basic functions for Nitro.
 * @param _ Nitro app instance
 * @param config Configuration */
export declare function initPluginBasic<N extends NitroApp & Record<string, any> = NitroApp>(_: N, config?: NitroAppBasicConfig): void;
// File: functions/initScriptsJson.d.ts
/** Generate JSON scripts for hydration. */
export declare function initScriptsJson(): string;
// File: functions/initServerRouter.d.ts
/** Initialize router for the application.
 * @param request HTTP request
 * @param router Vue router instance */
export declare function initServerRouter(request: Request, router: Router | undefined): Promise<void>;
// File: functions/initServerStorage.d.ts
/** Init server storage plugin.
 * @param app Vue app instance */
export declare function initServerStorage<T>(app: App<T>): void;
// File: functions/initSsrApp.d.ts
/** Render Vue app to string and extract context data.
 * @param app Vue app instance
 * @param context SSR context */
export declare function initSsrApp<T>(app: App<T>, context?: SSRContext): Promise<{
    appHtml: string;
    teleportsHtml: string;
    context: SSRContext;
}>;
// File: functions/uiBootstrapClient.d.ts
/** Initialize global unique ID generator for elements during bootstrap. */
export declare function uiBootstrapClient(): void;
// File: functions/uiBootstrapServer.d.ts
/** Initialize server environment, storage listeners, and isolation handlers. */
export declare function uiBootstrapServer(): void;
// File: functions/uiCookieStorage.d.ts
/** Initialize cookie storage. */
export declare function uiCookieStorage(): void;
// File: functions/uiCreateApp.d.ts
/** Create Vue SSR app and init core plugins.
 * @param appComponent root component
 * @param options configuration options */
export declare function uiCreateApp<A = any>(appComponent: A, options?: NitroAppOptions): {
    app: App<Element>;
    router: Router | undefined;
    options: NitroAppOptions;
};
// File: functions/uiCreateClientApp.d.ts
/** Finalize and mount Vue app on client, waiting for router readiness.
 * @param app Vue app instance
 * @param rootContainer mount container
 * @param router Vue Router instance
 * @param options configuration options
 * @param action additional action before mounting */
export declare function uiCreateClientApp<T>(app: App<T>, rootContainer?: string | T, router?: Router | undefined, options?: NitroAppOptions, action?: (app: App<T>) => Promise<void> | void): Promise<void>;
// File: functions/uiCreateServerApp.d.ts
/** Initialize server-side app, storage, routing, and SSR rendering.
 * @param app root component
 * @param request server request
 * @param router optional router
 * @param options configuration
 * @param action action before rendering
 * @param context SSR context
 * @param body HTML template
 * @returns rendered app data and metadata */
export declare function uiCreateServerApp<T>(app: App<T>, request: Request, router?: Router | undefined, options?: NitroAppOptions, action?: (app: App<T>) => Promise<void> | void, context?: SSRContext, body?: string): Promise<{
    appHtml: string;
    teleportsHtml: string;
    context: SSRContext;
    headers: Headers | undefined;
    lang: string;
    title: string;
    meta: string;
    scriptsJson: string;
    body: string;
}>;
// File: functions/uiCreateSsrRouter.d.ts
/** Create router instance for SSR or client.
 * @param routes route list
 * @param options router options */
export declare function uiCreateSsrRouter(routes: RouteRecordRaw[], options?: NitroAppRouterOptions): Router;
// File: functions/uiId.d.ts
/** Initialize global unique ID generator using Vue useId or incremental counter. */
export declare function uiId(): void;
// File: functions/uiServerStorage.d.ts
/** Init server-side storage via Vue inject using NITRO_APP_STORAGE key. */
export declare function uiServerStorage(): void;
// File: library-plugin.d.ts
export * from './functions/initPluginApiCache';
export * from './functions/initPluginBasic';
// File: library.d.ts
export * from './composables/useHeaders';
export * from './functions/getRequestOrigin';
export * from './functions/getRequestUrl';
export * from './functions/initApi';
export * from './functions/initClientRouter';
export * from './functions/initCookieStorage';
export * from './functions/initHeaders';
export * from './functions/initScriptsJson';
export * from './functions/initServerRouter';
export * from './functions/initServerStorage';
export * from './functions/initSsrApp';
export * from './functions/uiBootstrapClient';
export * from './functions/uiBootstrapServer';
export * from './functions/uiCookieStorage';
export * from './functions/uiCreateApp';
export * from './functions/uiCreateClientApp';
export * from './functions/uiCreateServerApp';
export * from './functions/uiCreateSsrRouter';
export * from './functions/uiId';
export * from './functions/uiServerStorage';
export * from './types/nitroAppTypes';
// File: types/nitroAppTypes.d.ts
/** Configuration for basic Nitro initializations */
export type NitroAppBasicConfig = {
    /** Api cache configuration */
    api?: {
        /** Storage key prefix */
        cacheStorageKey?: string;
        /** Cache cleanup threshold */
        cacheStepAgeClearOld?: number;
    };
};
/** Interface for partial router options */
export type NitroAppRouterOptions = Partial<RouterOptions>;
/** Nitro app initialization options */
export interface NitroAppOptions extends FunctionalPluginOptions {
    /** Router configuration */
    appRouter?: {
        /** List of route records */
        routes: RouteRecordRaw[];
        /** Router options */
        options?: NitroAppRouterOptions;
    };
}
/** Key for server-side storage in Vue context */
export declare const NITRO_APP_STORAGE = "__ui_server_storage";
/** Key for server-side cookie in Vue context */
export declare const NITRO_APP_COOKIE = "__ui_server_cookie";
/** Key for API headers in Vue context */
export declare const NITRO_API_HEADERS = "__ui_server_headers";
1) All these methods are in the @dxtmisha/nitro-basic library.
2) Everything that is exported can be used.
3) Use what is in this library if it exists; do not use other libraries if there is an analogue here. Do not create new ones if an analogue already exists here.

The following is the content of "exports" from package.json:
{
  ".": {
    "import": "./dist/library.js",
    "types": "./dist/src/library.d.ts"
  },
  "./plugin": {
    "import": "./dist/library-plugin.js",
    "types": "./dist/src/library-plugin.d.ts"
  }
}

// File: src/composables/useHeaders.d.ts
/** @param name Header name */
export declare function useHeaders(name: string): string | undefined;
export declare function useHeaders(): Headers | undefined;

// File: src/functions/getRequestHref.d.ts
/** @param request HTTP request */
export declare function getRequestHref(request: Request): string;

// File: src/functions/getRequestOrigin.d.ts
/** @param request HTTP request */
export declare function getRequestOrigin(request: Request): string;

// File: src/functions/getRequestUrl.d.ts
/** @param request HTTP request */
export declare function getRequestUrl(request: Request): string;

// File: src/functions/initApi.d.ts
/** @param request Incoming server request */
export declare function initApi(request: Request): void;

// File: src/functions/initClientRouter.d.ts
/** @param router Vue Router instance */
export declare function initClientRouter(router: any | undefined): Promise<void>;

// File: src/functions/initCookieStorage.d.ts
/** @param app Vue application instance @param request HTTP request */
export declare function initCookieStorage<T>(app: any, request: Request): void;

// File: src/functions/initHeaders.d.ts
/** @param app Vue application root component */
export declare function initHeaders<T>(app: any): void;

// File: src/functions/initPluginApiCache.d.ts
/** @param storageKey Storage key prefix @param cacheStepAgeClearOld Cache cleanup threshold */
export declare function initPluginApiCache(storageKey?: string, cacheStepAgeClearOld?: number): void;

// File: src/functions/initPluginBasic.d.ts
/** @param _ Nitro app instance @param config Configuration */
export declare function initPluginBasic<N extends any = any>(_: N, config?: any): void;

// File: src/functions/initScriptsJson.d.ts
/** Generates JSON-scripts for hydration. */
export declare function initScriptsJson(): string;

// File: src/functions/initServerRouter.d.ts
/** @param request HTTP request @param router Vue router instance */
export declare function initServerRouter(request: Request, router: any | undefined): Promise<void>;

// File: src/functions/initServerStorage.d.ts
/** @param app Vue application instance */
export declare function initServerStorage<T>(app: any): void;

// File: src/functions/initSsrApp.d.ts
/** @param app Vue application instance @param context SSR context */
export declare function initSsrApp<T>(app: any, context?: any): Promise<{
    appHtml: string;
    teleportsHtml: string;
    context: any;
}>;

// File: src/functions/uiBootstrapClient.d.ts
/** Initializes global element ID generator using Vue `useId`. */
export declare function uiBootstrapClient(): void;

// File: src/functions/uiBootstrapServer.d.ts
/** Initializes server-side components and orchestration. */
export declare function uiBootstrapServer(): void;

// File: src/functions/uiCookieStorage.d.ts
export declare function uiCookieStorage(): void;

// File: src/functions/uiCreateApp.d.ts
/** @param appComponent Root component @param options App config */
export declare function uiCreateApp<A = any>(appComponent: A, options?: any): {
    app: any;
    router: any | undefined;
    options: any;
};

// File: src/functions/uiCreateClientApp.d.ts
/** @param app Vue instance @param rootContainer Mount target @param router Router @param options App options @param action Pre-mount task */
export declare function uiCreateClientApp<T>(app: any, rootContainer?: string | T, router?: any | undefined, options?: any, action?: (app: any) => Promise<void> | void): Promise<void>;

// File: src/functions/uiCreateServerApp.d.ts
/** @param app Root component @param request Server request @param router Router @param options App options @param action Pre-render task @param context SSR context @param body HTML template */
export declare function uiCreateServerApp<T>(app: any, request: Request, router?: any | undefined, options?: any, action?: (app: any) => Promise<void> | void, context?: any, body?: string): Promise<{
    appHtml: string;
    teleportsHtml: string;
    context: any;
    headers: Headers | undefined;
    lang: string;
    title: string;
    meta: string;
    scriptsJson: string;
    body: string;
}>;

// File: src/functions/uiCreateSsrRouter.d.ts
/** @param routes Route records @param options Router options */
export declare function uiCreateSsrRouter(routes: any[], options?: any): any;

// File: src/functions/uiId.d.ts
/** Initializes element ID generator (Vue `useId` or incremental). */
export declare function uiId(): void;

// File: src/functions/uiServerStorage.d.ts
/** Sets up global `ServerStorage` using inject key `NITRO_APP_STORAGE`. */
export declare function uiServerStorage(): void;

// File: src/types/nitroAppTypes.d.ts
export type NitroAppBasicConfig = {
    api?: {
        cacheStorageKey?: string;
        cacheStepAgeClearOld?: number;
    };
};
export type NitroAppRouterOptions = Partial<any>;
export interface NitroAppOptions {
    appRouter?: {
        routes: any[];
        options?: NitroAppRouterOptions;
    };
    teleportBody?: string;
}
export declare const NITRO_APP_STORAGE = "__ui_server_storage";
export declare const NITRO_APP_COOKIE = "__ui_server_cookie";
export declare const NITRO_API_HEADERS = "__ui_server_headers";
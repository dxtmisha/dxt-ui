1) All these methods are in the @dxtmisha/nitro-basic library.
2) Everything that is exported can be used.
3) Use what is in this library if it exists; do not use other libraries if there is an analogue here. Do not create new ones if an analogue already exists here.

The following is the content of "exports" from package.json:
{
  ".": {
    "import": "./dist/library.js",
    "types": "./dist/library.d.ts"
  },
  "./client": {
    "import": "./dist/library-client.js",
    "types": "./dist/library-client.d.ts"
  },
  "./plugin": {
    "import": "./dist/library-plugin.js",
    "types": "./dist/library-plugin.d.ts"
  }
}

export type NitroAppBasicConfig = { api?: { cacheStorageKey?: string; cacheStepAgeClearOld?: number; }; };
export type NitroAppRouterOptions = Partial<RouterOptions>;
export interface NitroAppOptions extends FunctionalPluginOptions { appRouter?: { routes: RouteRecordRaw[]; options?: NitroAppRouterOptions; base?: string; }; teleportBody?: string; }
export declare const NITRO_APP_STORAGE = "__ui_server_storage";
export declare const NITRO_APP_COOKIE = "__ui_server_cookie";
export declare const NITRO_API_HEADERS = "__ui_server_headers";
export declare function useHeaders(name: string): string | undefined;
export declare function useHeaders(): Headers | undefined;
export declare function getContextValue<T = any>(key: string): T | undefined;
export declare function getRequestHref(request: Request): string;
export declare function getRequestOrigin(request: Request): string;
export declare function getRequestUrl(request: Request): string;
/** Initializes the API client for the current request and sets its base origin. */
export declare function initApi(request: Request): void;
export declare function initClientRouter(router: Router | undefined): Promise<void>;
export declare const appContext: UseContext<any>;
export declare function initCookieStorage<T>(app: App<T>, request: Request): { cookie: string; };
export declare function initHeaders<T>(app: App<T>): { headers: Headers; };
export declare function initPluginApiCache(storageKey?: string, cacheStepAgeClearOld?: number): void;
export declare function initPluginBasic<N extends NitroApp & Record<string, any> = NitroApp>(_: N, config?: NitroAppBasicConfig): void;
/** Generates JSON scripts required for hydration. */
export declare function initScriptsJson(): string;
export declare function initServerRouter(request: Request, router: Router | undefined): Promise<void>;
export declare function initServerStorage<T>(app: App<T>): { storage: Record<string, any>; };
export declare function initSsrApp<T>(app: App<T>, context?: SSRContext): Promise<{ appHtml: string; teleportsHtml: string; context: SSRContext; }>;
export declare function uiBootstrapClient(): void;
/** Initializes component creation and orchestration for the server environment. */
export declare function uiBootstrapServer(): void;
export declare function uiCookieStorage(): void;
export declare function uiCreateApp<A = any>(appComponent: A, options?: NitroAppOptions): { app: App<Element>; router: _RouterClassic | undefined; options: NitroAppOptions; };
/** Finalizes client-side initialization and mounts the Vue application after router readiness. */
export declare function uiCreateClientApp<T>(app: App<T>, rootContainer?: string | T, router?: Router | undefined, options?: NitroAppOptions, action?: (app: App<T>) => Promise<void> | void): Promise<void>;
/** Initializes the server-side application, including storage setup, routing, and SSR rendering. */
export declare function uiCreateServerApp<T>(app: App<T>, request: Request, router?: Router | undefined, options?: NitroAppOptions, action?: (app: App<T>) => Promise<void> | void, context?: SSRContext, body?: string): Promise<{ appHtml: string; teleportsHtml: string; context: SSRContext; headers: Headers | undefined; lang: string; title: string; meta: string; scriptsJson: string; body: string; }>;
export declare function uiCreateSsrRouter(routes: RouteRecordRaw[], options?: NitroAppRouterOptions, base?: string): _RouterClassic;
export declare function uiIdClient(): void;
export declare function uiIdServer(): void;
export declare function uiServerStorage(): void;
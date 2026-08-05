All these methods are in the @dxtmisha/nitro-basic library.

import type { App } from 'vue';
import type { RouteRecordRaw, Router, RouterOptions, _RouterClassic } from 'vue-router';
import type { SSRContext } from 'vue/server-renderer';
import type { NitroApp } from 'nitropack';
import type { UseContext } from 'unctx';
import type { FunctionalPluginOptions } from '@dxtmisha/functional';
/**
 * Composable for getting request headers.
 */
export declare function useHeaders(name: string): string | undefined;
export declare function useHeaders(): Headers | undefined;
/**
 * Gets a value from the application context by key name.
 */
export declare function getContextValue<T = any>(key: string): T | undefined;
/**
 * Gets the full URL (href) from the request URL.
 */
export declare function getRequestHref(request: Request): string;
/**
 * Gets the origin (protocol and domain) from the request URL.
 */
export declare function getRequestOrigin(request: Request): string;
/**
 * Gets the pathname from the request URL.
 */
export declare function getRequestUrl(request: Request): string;
/**
 * Initializes the API client for the current request.
 * Sets the base origin to ensure correct absolute URLs for server-side requests.
 */
export declare function initApi(request: Request): void;
/**
 * Waits for the initialization and readiness of the server-side router.
 * This ensures that all components and initial hooks are resolved before the application is rendered into HTML.
 */
export declare function initClientRouter(router: Router | undefined): Promise<void>;
/**
 * Application context instance for handling async request contexts.
 */
export declare const appContext: UseContext<any>;
/**
 * Inits the cookie storage plugin for the application.
 */
export declare function initCookieStorage<T>(app: App<T>, request: Request): {
    cookie: string;
};
/**
 * Initializes the API headers and provides them to the application.
 */
export declare function initHeaders<T>(app: App<T>): {
    headers: Headers;
};
/**
 * Initialize api cache.
 */
export declare function initPluginApiCache(storageKey?: string, cacheStepAgeClearOld?: number): void;
/**
 * Initialize basic functions for Nitro.
 */
export declare function initPluginBasic<N extends NitroApp & Record<string, any> = NitroApp>(_: N, config?: NitroAppBasicConfig): void;
/**
 * Generate JSON scripts for hydration.
 */
export declare function initScriptsJson(): string;
/**
 * Initializes the router for the application.
 */
export declare function initServerRouter(request: Request, router: Router | undefined): Promise<void>;
/**
 * Inits the server storage plugin for the application.
 */
export declare function initServerStorage<T>(app: App<T>): {
    storage: Record<string, any>;
};
/**
 * Renders the Vue application to a string and extracts context data.
 */
export declare function initSsrApp<T>(app: App<T>, context?: SSRContext): Promise<{
    appHtml: string;
    teleportsHtml: string;
    context: SSRContext;
}>;
/**
 * Initializes the global unique identifier generator for elements.
 * Uses Vue's `useId` to provide unique IDs during bootstrap.
 */
export declare function uiBootstrapClient(): void;
/**
 * Global creation and initialization of components for the server environment.
 * This method orchestrates various setup procedures to prepare the server for handling requests,
 * such as configuring storage listeners and isolation handlers.
 */
export declare function uiBootstrapServer(): void;
/**
 * Initialize cookie storage.
 */
export declare function uiCookieStorage(): void;
/**
 * Creates a Vue SSR application instance and initializes core plugins.
 */
export declare function uiCreateApp<A = any>(appComponent: A, options?: NitroAppOptions): {
    app: App<Element>;
    router: _RouterClassic | undefined;
    options: NitroAppOptions;
};
/**
 * Finalizes the initialization and mount of the Vue application on the client side.
 * It waits for the router to be ready to avoid hydration mismatches and then mounts the application
 * to the specified container.
 */
export declare function uiCreateClientApp<T>(app: App<T>, rootContainer?: string | T, router?: Router | undefined, options?: NitroAppOptions, action?: (app: App<T>) => Promise<void> | void): Promise<void>;
/**
 * Initializes the server-side application, including storage, routing, and SSR rendering.
 */
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
/**
 * Creates a router instance for SSR or client-side runtime.
 */
export declare function uiCreateSsrRouter(routes: RouteRecordRaw[], options?: NitroAppRouterOptions, base?: string): _RouterClassic;
/**
 * Initializes the global unique identifier generator for elements on the client side.
 * Uses an incremental counter starting from 10000.
 */
export declare function uiIdClient(): void;
/**
 * Initializes the global unique identifier generator for elements on the server side.
 * Uses the request context value.
 */
export declare function uiIdServer(): void;
/**
 * Initializes the server-side storage for the application.
 *
 * This function sets up the global `ServerStorage` by providing a mechanism
 * to retrieve the storage object from the Vue application context using `inject`.
 * It looks for the `NITRO_APP_STORAGE` key.
 */
export declare function uiServerStorage(): void;
/**
 * Configuration for basic Nitro initializations.
 */
export type NitroAppBasicConfig = {
    /** Api cache configuration */
    api?: {
        /** Storage key prefix */
        cacheStorageKey?: string;
        /** Cache cleanup threshold */
        cacheStepAgeClearOld?: number;
    };
};
/**
 * Interface for the partial router options.
 */
export type NitroAppRouterOptions = Partial<RouterOptions>;
/**
 * Interface for Nitro application initialization options.
 */
export interface NitroAppOptions extends FunctionalPluginOptions {
    /** Router configuration */
    appRouter?: {
        /** List of route records */
        routes: RouteRecordRaw[];
        /** Router creation options */
        options?: NitroAppRouterOptions;
        /** Base path for the router */
        base?: string;
    };
    /** Body selector for teleporting */
    teleportBody?: string;
}
/**
 * Key used to store the server-side storage object in the Vue app context.
 */
export declare const NITRO_APP_STORAGE = "__ui_server_storage";
/**
 * Key used to store the server-side cookie object in the Vue app context.
 */
export declare const NITRO_APP_COOKIE = "__ui_server_cookie";
/**
 * Key used to store the server-side headers object in the Vue app context.
 */
export declare const NITRO_API_HEADERS = "__ui_server_headers";
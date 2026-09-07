// md5:51aba7eefdfe7d99398e827ae03ca3f7 true
import type { RouteRecordRaw, RouterOptions } from 'vue-router';
import type { FunctionalPluginOptions } from '@dxtmisha/functional';

export type NitroAppBasicConfig = {
    api?: {
        cacheStorageKey?: string;
        cacheStepAgeClearOld?: number;
    };
};

export type NitroAppRouterOptions = Partial<RouterOptions>;

export interface NitroAppOptions extends FunctionalPluginOptions {
    appRouter?: {
        routes: RouteRecordRaw[];
        options?: NitroAppRouterOptions;
        base?: string;
    };
    teleportBody?: string;
}

/** Server-side storage context key @keywords storage context key */
export declare const NITRO_APP_STORAGE = "__ui_server_storage";

/** Server-side cookie context key @keywords cookie context key */
export declare const NITRO_APP_COOKIE = "__ui_server_cookie";

/** Server-side headers context key @keywords headers context key */
export declare const NITRO_API_HEADERS = "__ui_server_headers";
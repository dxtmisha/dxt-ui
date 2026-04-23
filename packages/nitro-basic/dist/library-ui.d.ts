import { App } from 'vue';
import { FunctionalPluginOptions } from '@dxtmisha/functional';
import { Router } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';
import { RouterOptions } from 'vue-router';

/**
 * Configuration for basic Nitro initializations/
 * Конфигурация для базовых инициализаций Nitro
 */
export declare type NitroAppBasicConfig = {
    /** Api cache configuration / Конфигурация кэша API */
    api?: {
        /** Storage key prefix / Префикс ключа хранилища */
        cacheStorageKey?: string;
        /** Cache cleanup threshold / Порог очистки кэша */
        cacheStepAgeClearOld?: number;
    };
    /** Cookie configuration / Конфигурация cookie */
    cookie?: {
        /** Cookie age in seconds / Срок жизни cookie в секундах */
        age?: number;
        /** SameSite attribute / Атрибут SameSite */
        sameSite?: 'strict' | 'lax';
    };
};

/**
 * Interface for Nitro application initialization options/
 * Интерфейс для опций инициализации приложения Nitro
 */
export declare interface NitroAppOptions extends FunctionalPluginOptions {
    /** Router configuration / Конфигурация маршрутизатора */
    appRouter?: {
        /** List of route records / Список записей маршрутов */
        routes: RouteRecordRaw[];
        /** Router creation options / Опции создания маршрутизатора */
        options?: NitroAppRouterOptions;
    };
}

/**
 * Interface for the partial router options /
 * Интерфейс для частичных опций маршрутизатора
 */
export declare type NitroAppRouterOptions = Partial<RouterOptions>;

/**
 * Creates a Vue SSR application instance and initializes core plugins.
 *
 * Создаёт экземпляр приложения Vue SSR и инициализирует основные плагины.
 * @param appComponent root component of the application/ корневой компонент приложения
 * @param options application configuration options/ опции конфигурации приложения
 */
export declare function uiCreateApp<A = any>(appComponent: A, options?: NitroAppOptions): {
    app: App<Element>;
    router: Router | undefined;
};

/**
 * Creates a router instance for SSR or client-side runtime.
 *
 * Создаёт экземпляр маршрутизатора для SSR или клиентской среды.
 * @param routes list of routes for the router/ список маршрутов для маршрутизатора
 * @param options router options/ опции маршрутизатора
 */
export declare function uiCreateSsrRouter(routes: RouteRecordRaw[], options?: NitroAppRouterOptions): Router;

export { }

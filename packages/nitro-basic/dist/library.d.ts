import { FunctionalPluginOptions } from '@dxtmisha/functional';
import { H3Event } from 'h3';
import { NitroApp } from 'nitropack';
import { RouteRecordRaw } from 'vue-router';
import { RouterOptions } from 'vue-router';

/**
 * Initialize api cache.
 *
 * Инициализация api кэша.
 * @param storageKey Storage key prefix / Префикс ключа хранилища
 * @param cacheStepAgeClearOld Cache cleanup threshold / Порог очистки кэша
 */
export declare function initApiCache(storageKey?: string, cacheStepAgeClearOld?: number): void;

/**
 * Initialize basic functions for Nitro.
 *
 * Инициализация базовых функций для Nitro.
 * @param nitroApp Nitro application instance / Экземпляр приложения Nitro
 * @param config Configuration / Конфигурация
 */
export declare function initBasic<N extends NitroApp & Record<string, any> = NitroApp>(nitroApp: N, config?: NitroAppBasicConfig): void;

/**
 * Initialize cookie storage.
 *
 * Инициализация хранилища cookie.
 * @param event H3 event / Событие H3
 * @param ageDefault Default cookie age in seconds / Срок жизни cookie по умолчанию в секундах
 * @param sameSiteDefault Default SameSite attribute / Атрибут SameSite по умолчанию
 */
export declare function initCookieStorage(event: H3Event, ageDefault?: number, sameSiteDefault?: 'strict' | 'lax'): void;

/**
 * Initializes ServerStorage for Nitro.
 *
 * Инициализирует ServerStorage для Nitro.
 * Use useEvent().context as storage. / Использует useEvent().context в качестве хранилища.
 */
export declare function initServerStorage(useEvent: () => any): void;

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

export { }

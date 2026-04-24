import { NitroApp } from 'nitropack';

/**
 * Initialize api cache.
 *
 * Инициализация api кэша.
 * @param storageKey Storage key prefix / Префикс ключа хранилища
 * @param cacheStepAgeClearOld Cache cleanup threshold / Порог очистки кэша
 */
export declare function initPluginApiCache(storageKey?: string, cacheStepAgeClearOld?: number): void;

/**
 * Initialize basic functions for Nitro.
 *
 * Инициализация базовых функций для Nitro.
 * @param _ Nitro application instance / Экземпляр приложения Nitro
 * @param config Configuration / Конфигурация
 */
export declare function initPluginBasic<N extends NitroApp & Record<string, any> = NitroApp>(_: N, config?: NitroAppBasicConfig): void;

/**
 * Configuration for basic Nitro initializations/
 * Конфигурация для базовых инициализаций Nitro
 */
declare type NitroAppBasicConfig = {
    /** Api cache configuration / Конфигурация кэша API */
    api?: {
        /** Storage key prefix / Префикс ключа хранилища */
        cacheStorageKey?: string;
        /** Cache cleanup threshold / Порог очистки кэша */
        cacheStepAgeClearOld?: number;
    };
};

export { }

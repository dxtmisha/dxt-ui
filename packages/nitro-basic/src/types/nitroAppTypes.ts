import type { RouteRecordRaw, RouterOptions } from 'vue-router'
import type { FunctionalPluginOptions } from '@dxtmisha/functional'

/**
 * Configuration for basic Nitro initializations/
 * Конфигурация для базовых инициализаций Nitro
 */
export type NitroAppBasicConfig = {
  /** Api cache configuration / Конфигурация кэша API */
  api?: {
    /** Storage key prefix / Префикс ключа хранилища */
    cacheStorageKey?: string
    /** Cache cleanup threshold / Порог очистки кэша */
    cacheStepAgeClearOld?: number
  }
  /** Cookie configuration / Конфигурация cookie */
  cookie?: {
    /** Cookie age in seconds / Срок жизни cookie в секундах */
    age?: number
    /** SameSite attribute / Атрибут SameSite */
    sameSite?: 'strict' | 'lax'
  }
}

/**
 * Interface for the partial router options /
 * Интерфейс для частичных опций маршрутизатора
 */
export type NitroAppRouterOptions = Partial<RouterOptions>

/**
 * Interface for Nitro application initialization options/
 * Интерфейс для опций инициализации приложения Nitro
 */
export interface NitroAppOptions extends FunctionalPluginOptions {
  /** Router configuration / Конфигурация маршрутизатора */
  appRouter?: {
    /** List of route records / Список записей маршрутов */
    routes: RouteRecordRaw[]
    /** Router creation options / Опции создания маршрутизатора */
    options?: NitroAppRouterOptions
  }
}

export const NITRO_APP_STORAGE = '__ui_server_storage'

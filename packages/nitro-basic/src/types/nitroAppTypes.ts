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

/**
 * Key used to store the server-side storage object in the Vue app context/
 * Ключ, используемый для хранения объекта серверного хранилища в
 * контексте приложения Vue
 */
export const NITRO_APP_STORAGE = '__ui_server_storage'

/**
 * Key used to store the server-side cookie object in the Vue app context/
 * Ключ, используемый для хранения объекта cookie в контексте приложения Vue
 */
export const NITRO_APP_COOKIE = '__ui_server_cookie'

/**
 * Key used to store the server-side headers object in the Vue app context/
 * Ключ, используемый для хранения объекта заголовков в контексте приложения Vue
 */
export const NITRO_API_HEADERS = '__ui_server_headers'

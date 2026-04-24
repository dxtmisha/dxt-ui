// export:none

import type { NitroApp } from 'nitropack'

import { initPluginApiCache } from './initPluginApiCache'

import type { NitroAppBasicConfig } from '../types/nitroAppTypes'

/**
 * Initialize basic functions for Nitro.
 *
 * Инициализация базовых функций для Nitro.
 * @param _ Nitro application instance / Экземпляр приложения Nitro
 * @param config Configuration / Конфигурация
 */
export function initPluginBasic<N extends NitroApp & Record<string, any> = NitroApp>(
  _: N,
  config: NitroAppBasicConfig = {}
) {
  initPluginApiCache(
    config.api?.cacheStorageKey,
    config.api?.cacheStepAgeClearOld
  )
}

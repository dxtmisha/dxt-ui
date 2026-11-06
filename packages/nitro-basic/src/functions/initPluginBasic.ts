// export:none

import type { NitroApp } from 'nitro/types'

import { initPluginApiCache } from './initPluginApiCache'

import type { NitroAppBasicConfig } from '../types/nitroAppTypes'

/**
 * Initialize basic functions for Nitro.
 *
 * Инициализация базовых функций для Nitro.
 * @param _ Nitro application instance / Экземпляр приложения Nitro
 * @param config Configuration / Конфигурация
 */
export function initPluginBasic<N = NitroApp>(
  _?: N,
  config: NitroAppBasicConfig = {}
): void {
  initPluginApiCache(
    config.api?.cacheStorageKey,
    config.api?.cacheStepAgeClearOld
  )
}

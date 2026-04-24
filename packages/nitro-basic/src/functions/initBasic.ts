// export:none

import type { NitroApp } from 'nitropack'

import { initApiCache } from './initApiCache'

import type { NitroAppBasicConfig } from '../types/nitroAppTypes'

/**
 * Initialize basic functions for Nitro.
 *
 * Инициализация базовых функций для Nitro.
 * @param _ Nitro application instance / Экземпляр приложения Nitro
 * @param config Configuration / Конфигурация
 */
export function initBasic<N extends NitroApp & Record<string, any> = NitroApp>(
  _: N,
  config: NitroAppBasicConfig = {}
) {
  initApiCache(
    config.api?.cacheStorageKey,
    config.api?.cacheStepAgeClearOld
  )
}

import type { NitroApp } from 'nitropack'

import { initApiCache } from './initApiCache'
import { initCookieStorage } from './initCookieStorage'

import type { NitroAppBasicConfig } from '../types/nitroAppTypes'

/**
 * Initialize basic functions for Nitro.
 *
 * Инициализация базовых функций для Nitro.
 * @param nitroApp Nitro application instance / Экземпляр приложения Nitro
 * @param config Configuration / Конфигурация
 */
export function initBasic<N extends NitroApp & Record<string, any> = NitroApp>(
  nitroApp: N,
  config: NitroAppBasicConfig = {}
) {
  nitroApp.hooks.hook('request', (event: any) => {
    initApiCache(
      config.api?.cacheStorageKey,
      config.api?.cacheStepAgeClearOld
    )

    initCookieStorage(
      event,
      config.cookie?.age,
      config.cookie?.sameSite
    )
  })
}

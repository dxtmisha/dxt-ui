import type { NitroApp } from 'nitropack'

import { initServerStorage } from './initServerStorage'
import { initApiCache } from './initApiCache'
import { initCookieStorage } from './initCookieStorage'

import type { NitroAppBasicConfig } from '../types/nitroAppTypes'

export function initBasic(
  nitroApp: NitroApp,
  config: NitroAppBasicConfig = {}
) {
  initServerStorage()

  initApiCache(
    config.api?.cacheStorageKey,
    config.api?.cacheStepAgeClearOld
  )

  nitroApp.hooks.hook('request', (event: any) => {
    initCookieStorage(
      event,
      config.cookie?.age,
      config.cookie?.sameSite
    )
  })
}

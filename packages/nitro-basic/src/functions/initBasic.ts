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

  initCookieStorage(config.cookie)

  nitroApp.hooks.hook('request', (event) => {

  })

  console.log('initBasic')
}

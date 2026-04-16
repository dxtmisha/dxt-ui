import type { NitroApp } from 'nitropack'

import { initServerStorage } from './initServerStorage'

export function initBasic(
  nitroApp: NitroApp
) {
  initServerStorage()

  console.log('initBasic')
}

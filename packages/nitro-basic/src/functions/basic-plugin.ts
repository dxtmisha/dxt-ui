import { defineNitroPlugin } from 'nitropack/runtime'

import { initBasic } from './initBasic'

/**
 * Nitro plugin for basic initialization.
 *
 * Плагин Nitro для базовой инициализации.
 */
export default defineNitroPlugin((nitroApp) => {
  initBasic(nitroApp)
})

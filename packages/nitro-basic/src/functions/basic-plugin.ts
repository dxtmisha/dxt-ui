import { defineNitroPlugin } from 'nitropack/runtime'

import { initBasic } from './initBasic'

export default defineNitroPlugin((nitroApp) => {
  initBasic(nitroApp)
})

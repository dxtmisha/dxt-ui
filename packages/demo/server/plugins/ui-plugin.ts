import { definePlugin } from 'nitro'
import { initBasic } from '@dxtmisha/nitro-basic'

export default definePlugin((nitroApp) => {
  initBasic(nitroApp as any)
})

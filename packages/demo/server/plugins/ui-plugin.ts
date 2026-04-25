import { definePlugin } from 'nitro'
import { initPluginBasic } from '@dxtmisha/nitro-basic/plugin'

export default definePlugin((nitroApp) => {
  console.log('UI plugin initialized')
  initPluginBasic(nitroApp as any)
})

import { definePlugin } from 'nitro'
import { initPluginBasic } from '@dxtmisha/nitro-basic/plugin'

export default definePlugin((nitroApp) => {
  initPluginBasic(nitroApp)
  console.log('UI plugin initialized')
})

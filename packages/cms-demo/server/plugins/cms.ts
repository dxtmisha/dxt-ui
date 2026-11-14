import { definePlugin } from 'nitro'
import { initPluginCms } from '@dxtmisha/cms-nitro'

export default definePlugin(async (nitroApp) => {
  await initPluginCms(nitroApp, {
    connectionString: process.env.DATABASE_URL
  })
  console.log('CMS plugin initialized')
})

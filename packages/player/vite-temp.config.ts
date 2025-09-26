import { resolve } from 'node:path'
import { mergeConfig } from 'vite'

import { viteComponentOnly } from '@dxt-ui/configuration/viteComponentOnly'
// import viteWorkers from './vite-workers.config.ts'

// https://vite.dev/config/
export default mergeConfig(
  {}, // viteWorkers,
  viteComponentOnly(
    resolve(__dirname, './src/components/UiPlayerLite/index.ts'),
    resolve(__dirname, './src')
  )
)

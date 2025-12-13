import { resolve } from 'node:path'
import { mergeConfig } from 'vite'

import { viteComponentOnly } from '@dxtmisha/configuration/viteComponentOnly'
// import viteWorkers from './vite-workers.config.ts'

// https://vite.dev/config/
export default mergeConfig(
  {}, // viteWorkers,
  viteComponentOnly(
    resolve(__dirname, './[path]'),
    resolve(__dirname, './src')
  )
)

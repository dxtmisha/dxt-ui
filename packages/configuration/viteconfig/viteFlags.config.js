import { mergeConfig } from 'vite'

import { viteBasic } from './viteBasic.config.js'

// https://vite.dev/config/
export const viteFlags = mergeConfig(
  viteBasic,
  {
    build: {
      lib: {
        entry: [
          'src/flags.ts'
        ]
      }
    }
  }
)

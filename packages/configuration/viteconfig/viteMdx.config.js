import { mergeConfig } from 'vite'

import { viteBasic } from './viteBasic.config.js'
import mdx from '@mdx-js/rollup'

// https://vite.dev/config/
export const viteMdx = mergeConfig(
  viteBasic,
  {
    plugins: [
      mdx()
    ]
  }
)

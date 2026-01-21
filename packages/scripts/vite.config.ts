import { mergeConfig } from 'vite'
import mdx from '@mdx-js/rollup'

import { viteBasicFunction } from '@dxtmisha/configuration/viteBasicFunction'

// https://vite.dev/config/
export default mergeConfig(
  viteBasicFunction(
    undefined,
    undefined,
    [
      'src/config.ts',
      'src/library.ts',
      'src/library-ai.ts',
      'src/library-plugin.ts'
    ],
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    true
  ) as Record<string, any>,
  {
    plugins: [mdx()]
  }
)

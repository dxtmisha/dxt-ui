import { mergeConfig } from 'vite'
import { viteLibrariesRollup } from '@dxtmisha/configuration/viteLibrariesRollup'

import mdx from '@mdx-js/rollup'

// https://vite.dev/config/
export default mergeConfig(
  viteLibrariesRollup,
  {
    plugins: [mdx()]
  }
)

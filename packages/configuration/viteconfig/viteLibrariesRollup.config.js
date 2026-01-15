import fs from 'node:fs'
import path from 'node:path'

import { viteBasicFunction } from './viteBasicFunction.config.js'

// https://vite.dev/config/
export const viteLibrariesRollup = viteBasicFunction(
  undefined,
  undefined,
  [
    ...(() => {
      const dir = path.join('src', 'library')

      if (fs.existsSync(dir)) {
        return fs.readdirSync(dir)
          .filter(file => file.endsWith('.ts'))
          .map(file => path.join(dir, file))
      }

      return []
    })()
  ],
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  true
)

import { viteBasicFunction } from './viteBasicFunction.config.js'
import { getLibraryEntries } from '../functions/getLibraryEntries.js'

// https://vite.dev/config/
export const viteLibrariesRollup = viteBasicFunction(
  undefined,
  undefined,
  getLibraryEntries(),
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  true
)

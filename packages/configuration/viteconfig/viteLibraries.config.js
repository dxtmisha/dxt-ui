import { viteBasicFunction } from './viteBasicFunction.config.js'
import { getLibraryEntries } from '../functions/getLibraryEntries.js'

// https://vite.dev/config/
export const viteLibraries = viteBasicFunction(
  undefined,
  undefined,
  getLibraryEntries()
)

import { mergeConfig } from 'vite'
import mdx from '@mdx-js/rollup'

import { viteBasicFunction } from './viteBasicFunction.config.js'
import { getLibraryEntries } from '../functions/getLibraryEntries.js'

// https://vite.dev/config/
/**
 * Vite configuration for constructors.
 *
 * Конфигурация Vite для конструкторов.
 */
export const viteConstructors = mergeConfig(
  viteBasicFunction(
    undefined,
    undefined,
    [
      ...getLibraryEntries(),
      'src/library.ts'
    ],
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    false
  ),
  {
    plugins: [mdx()]
  }
)

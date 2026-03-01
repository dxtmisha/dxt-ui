import { mergeConfig } from 'vite'
import mdx from '@mdx-js/rollup'

import { viteBasicFunction } from './viteBasicFunction.config.js'
import { getLibraryEntries } from '../functions/getLibraryEntries.js'

// https://vite.dev/config/
/**
 * Vite configuration for building components.
 *
 * Конфигурация Vite для сборки компонентов.
 */
export const viteComponents = mergeConfig(
  viteBasicFunction(
    undefined,
    undefined,
    getLibraryEntries(),
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

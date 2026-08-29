import { mergeConfig } from 'vite'
import mdx from '@mdx-js/rollup'

import { viteBasicFunction } from './viteBasicFunction.config.js'
import { vitePluginComponents } from '../functions/vitePluginComponents.js'
import { getLibraryEntries } from '../functions/getLibraryEntries.js'

// https://vite.dev/config/
/**
 * Vite configuration for building components.
 *
 * Конфигурация Vite для сборки компонентов.
 */
export const viteComponents = mergeConfig(
  viteBasicFunction({
    entry: getLibraryEntries(),
    fileCssName: '',
    rollupTypes: false,
    excludeExtended: [
      '**/*AiWiki*',
      '**/*AiWiki.vue',
      '**/AiWiki.vue',
      '**/wiki.ts',
      '**/wikiData.ts',
      '**/*.wiki.ts',
      '**/*.wiki.*',
      '**/wiki/**',
      '**/App.vue',
      '**/main.ts',
      '**/main.tsx'
    ]
  }),
  {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          preserveModules: true,
          assetFileNames: '[name][extname]'
        }
      }
    },
    plugins: [
      mdx({
        exclude: [/\?raw$/, /media\/templates/]
      }),
      vitePluginComponents()
    ]
  }
)

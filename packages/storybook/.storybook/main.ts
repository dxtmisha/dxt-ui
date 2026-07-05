import type { StorybookConfig } from '@storybook/vue3-vite'

import { mergeConfig } from 'vite'
import { dirname } from 'path'

import { fileURLToPath } from 'url'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}

const config: StorybookConfig = {
  stories: [
    '../../d1/src/**/*.mdx',
    '../../d1/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',

    '../../wiki/src/media/functional/**/*.mdx',
    '../../wiki/src/media/functional/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../wiki/src/media/styles/**/*.mdx',
    '../../wiki/src/media/styles/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs')
  ],
  framework: getAbsolutePath('@storybook/vue3-vite'),
  async viteFinal(config) {
    return mergeConfig(config, {
      base: '/dxt-ui/',
      build: {
        sourcemap: false
      }
    })
  }
}
export default config

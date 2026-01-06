import { mergeConfig } from 'vite'
import type { StorybookConfig } from '@storybook/vue3-vite'

import { join, dirname } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: [
    '../../wiki/src/media/functional/**/*.mdx',
    '../../wiki/src/media/functional/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../wiki/src/media/styles/**/*.mdx',
    '../../wiki/src/media/styles/**/*.stories.@(js|jsx|mjs|ts|tsx)',

    '../../d1/src/**/*.mdx',
    '../../d1/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',

    '../../test/src/**/*.mdx',
    '../../test/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',

    '../../demo/src/**/*.mdx',
    '../../demo/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-vitest')
  ],
  framework: {
    name: getAbsolutePath('@storybook/vue3-vite'),
    options: {}
  },
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

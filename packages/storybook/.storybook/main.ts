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
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',

    '../../functional/src/**/*.mdx',
    '../../functional/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',

    '../../d1/src/**/*.mdx',
    '../../d1/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',

    '../../player/src/**/*.mdx',
    '../../player/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
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
  }
}
export default config

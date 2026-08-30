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
    // Constructor & Styles
    '../../constructor/src/storybook/**/*.mdx',
    '../../constructor/src/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../styles/src/storybook/**/*.mdx',
    '../../styles/src/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)',

    // Figma Ecosystem
    '../../figma/src/storybook/**/*.mdx',
    '../../figma/src/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../figma-code/src/storybook/**/*.mdx',
    '../../figma-code/src/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../figma-ref/src/storybook/**/*.mdx',
    '../../figma-ref/src/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)',

    // Functional & SSR
    '../../functional/src/storybook/**/*.mdx',
    '../../functional/src/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../functional-basic/src/storybook/**/*.mdx',
    '../../functional-basic/src/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../nitro-basic/src/storybook/**/*.mdx',
    '../../nitro-basic/src/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)',

    // MCP & Scripts
    '../../demo-mcp/src/**/*.mdx',
    '../../demo-mcp/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../mcp/src/**/*.mdx',
    '../../mcp/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../scripts/src/storybook/**/*.mdx',
    '../../scripts/src/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)',

    // Demo & Wiki
    '../../d1/src/**/*.mdx',
    '../../d1/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../wiki/src/media/functional/**/*.mdx',
    '../../wiki/src/media/functional/**/*.stories.@(js|jsx|mjs|ts|tsx)'
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

import path from 'node:path'
import { coverageConfigDefaults, defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'

export default defineConfig({
  plugins: [vue()],
  test: {
    passWithNoTests: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: [
        '**/packages/d1/src/components/**/*.{vue,ts}',
        '**/d1/src/components/**/*.{vue,ts}'
      ],
      exclude: [
        ...coverageConfigDefaults.exclude,
        '**/*.stories.*',
        '**/*.mdx',
        '**/__tests__/**',
        '**/storybook-static/**'
      ]
    },
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(import.meta.dirname, '.storybook')
          })
        ],
        test: {
          name: 'storybook',
          environment: 'jsdom',
          exclude: ['**/*.mdx', '**/node_modules/**']
        }
      }
    ]
  }
})

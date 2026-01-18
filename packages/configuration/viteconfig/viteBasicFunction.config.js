import { defineConfig } from 'vite'
import { builtinModules } from 'node:module'

import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

import autoprefixer from 'autoprefixer'
import cssnanoPlugin from 'cssnano'

// https://vite.dev/config/

/**
 * Creates a base Vite config for libraries with functions/composables/classes.
 *
 * Создаёт базовую конфигурацию Vite для библиотек с функциями/композаблами/классами.
 * @param name global library name / глобальное имя библиотеки
 * @param target build target / цель сборки
 * @param entry entry points / входные точки сборки
 * @param include glob patterns for d.ts / паттерны для генерации d.ts
 * @param includeExtended extra patterns / дополнительные паттерны
 * @param external external dependencies / внешние зависимости
 * @param externalExtended extra dependencies / дополнительные зависимости
 * @param fileCssName name of the output CSS file / имя выходного CSS файла
 * @param rollupTypes whether to use rollupTypes in dts plugin / использовать ли rollupTypes в плагине dts
 * @returns Vite config / конфигурация Vite
 */
export const viteBasicFunction = (
  name = 'dxt-ui',
  target = 'es2018',
  entry = 'src/library.ts',
  include = [
    'src/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.vue'
  ],
  includeExtended = [],
  external = [
    ...builtinModules,
    ...builtinModules.map(m => `node:${m}`),
    'vue',
    'vue-router',
    '@vue/runtime-core',
    '@vue/runtime-dom',
    '@vue/reactivity',
    'react',
    'react/jsx-runtime',
    '@storybook',
    '@storybook/addon-docs',
    '@dxtmisha/configuration',
    '@dxtmisha/constructor',
    '@dxtmisha/d1',
    '@dxtmisha/figma',
    '@dxtmisha/functional',
    '@dxtmisha/functional-basic',
    '@dxtmisha/media',
    '@dxtmisha/player',
    '@dxtmisha/scripts',
    '@dxtmisha/styles',
    '@dxtmisha/wiki',
    '@emotion/react',
    '@emotion/styled',
    '@napi-rs/canvas'
  ],
  externalExtended = [],
  fileCssName = 'style.css',
  rollupTypes = false
) => defineConfig({
  build: {
    target,
    lib: {
      entry,
      name,
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      external: (id) => {
        if (id.includes('node_modules')) {
          return true
        }

        const externalsList = [
          ...external,
          ...externalExtended
        ]

        return externalsList.some(ext => id === ext || id.startsWith(ext + '/'))
      },
      output: {
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.names?.[0] || assetInfo.originalFileName

          if (
            fileCssName
            && fileName
            && fileName.endsWith('.css')
          ) {
            return fileCssName
          }

          return '[name]-[hash][extname]'
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['@napi-rs/canvas', 'fsevents']
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        cssnanoPlugin({ preset: 'default' })
      ]
    }
  },
  plugins: [
    vue(),
    dts({
      clearPureImport: true,
      copyDtsFiles: true,
      exclude: [
        '**/__tests__/**',
        '**/*.test.ts',
        '**/*.spec.ts',
        '**/*.stories.ts',
        '**/*.stories.tsx',
        '**/*.json',
        '**/node_modules/**',
        '**/dist/**',
        '**/dist-temporary/**',
        '**/*.config.ts',
        '**/*.config.js',
        '**/.gitignore',
        '**/vite-env.d.ts'
      ],
      include: [
        ...entry,
        ...include,
        ...includeExtended
      ],
      outDir: 'dist',
      rollupTypes,
      staticImport: true,
      tsconfigPath: './tsconfig.app.json'

    })
  ]
})

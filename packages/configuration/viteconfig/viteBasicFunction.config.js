import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

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
 * @returns Vite config / конфигурация Vite
 */
export const viteBasicFunction = (
  name = 'dxt-ui',
  target = 'es2018',
  entry = [
    'src/library.ts'
  ],
  include = [
    'src/classes/**/*.ts',
    'src/composables/**/*.ts',
    'src/documentation/**/*.ts',
    'src/documentation/**/*.tsx',
    'src/functions/**/*.ts',
    'src/media/**/*.ts',
    'src/types/**/*.ts',
    'src/flags.ts',
    'src/library.ts',
    'src/library-lite.ts',
    'src/media.ts',
    'src/storybook.tsx'
  ],
  includeExtended = [],
  external = [
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
    '@dxtmisha/functional',
    '@dxtmisha/media',
    '@dxtmisha/player',
    '@dxtmisha/scripts',
    '@dxtmisha/styles',
    '@dxtmisha/wiki',
    '@emotion/react',
    '@emotion/styled'
  ],
  externalExtended = [],
  fileCssName = 'style.css'
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
  plugins: [
    vue(),
    dts({
      clearPureImport: false,
      copyDtsFiles: true,
      include: [
        ...entry,
        ...include,
        ...includeExtended
      ],
      insertTypesEntry: true,
      outDir: 'dist',
      staticImport: true,
      tsconfigPath: './tsconfig.app.json',
      rollupTypes: true
    })
  ]
})

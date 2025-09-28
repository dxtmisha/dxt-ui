import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/

/**
 * Creates a base Vite config for libraries with functions/composables/classes.
 *
 * Создаёт базовую конфигурацию Vite для библиотек с функциями/композаблами/классами.
 * @param name global library name / глобальное имя библиотеки
 * @param entry entry points / входные точки сборки
 * @param include glob patterns for d.ts / паттерны для генерации d.ts
 * @param includeExtended extra patterns / дополнительные паттерны
 * @param external external dependencies / внешние зависимости
 * @param externalExtended extra dependencies / дополнительные зависимости
 * @returns Vite config / конфигурация Vite
 */
export const viteBasicFunction = (
  name = 'dxt-ui',
  entry = [
    'src/library.ts'
  ],
  include = [
    'src/classes/**/*.ts',
    'src/composables/**/*.ts',
    'src/functions/**/*.ts',
    'src/types/**/*.ts',
    'src/flags.ts',
    'src/library.ts'
  ],
  includeExtended = [],
  external = [
    'vue',
    'vue-router',
    '@vue/runtime-core',
    '@vue/runtime-dom',
    '@vue/reactivity',
    'react',
    '@dxtmisha/configuration',
    '@dxtmisha/media',
    '@dxtmisha/functional'
  ],
  externalExtended = []
) => defineConfig({
  build: {
    lib: {
      entry,
      name,
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      external: [
        ...external,
        ...externalExtended
      ]
    }
  },
  plugins: [
    vue(),
    dts({
      clearPureImport: false,
      copyDtsFiles: true,
      include: [
        ...include,
        ...includeExtended
      ],
      insertTypesEntry: true,
      outDir: 'dist',
      staticImport: true,
      tsconfigPath: './tsconfig.app.json'
    })
  ]
})

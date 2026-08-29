import { defineConfig } from 'vite'
import { builtinModules } from 'node:module'
import path from 'node:path'

import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'

import { vitePluginLibrary } from '../functions/vitePluginLibrary.js'

// https://vite.dev/config/

/**
 * Creates a base Vite config for libraries with functions/composables/classes.
 *
 * Создаёт базовую конфигурацию Vite для библиотек с функциями/композаблами/классами.
 * @param {import('./viteBasicFunction.config').ViteBasicFunctionOptions} [options] configuration options / параметры конфигурации
 * @returns {import('vite').UserConfigExport} Vite config / конфигурация Vite
 */
export const viteBasicFunction = ({
  entry = 'src/library.ts',
  name = 'dxt-ui',
  target = 'es2018',

  fileCssName = 'style.css',
  fileLibraryName = undefined,

  include = [
    '@dxtmisha/constructor',
    'src/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.vue'
  ],
  includeExtended = [],
  exclude = [
    '**/.gitignore',
    '**/__tests__/**',
    '**/dist/**',
    '**/dist-temporary/**',
    '**/node_modules/**',
    '**/vite-env.d.ts',
    '**/*.config.js',
    '**/*.config.ts',
    '**/*.json',
    '**/*.spec.ts',
    '**/*.stories.ts',
    '**/*.stories.tsx',
    '**/*.test.ts',
    '**/App.vue',
    '**/main.ts',
    '**/main.tsx'
  ],
  excludeExtended = [],

  external = [
    ...builtinModules,
    ...builtinModules.map(m => `node:${m}`),
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
    '@napi-rs/canvas',
    '@storybook',
    '@storybook/addon-docs',
    '@vue/reactivity',
    '@vue/runtime-core',
    '@vue/runtime-dom',
    'nitro',
    'nitropack',
    'nitropack/runtime',
    'react',
    'react/jsx-dev-runtime',
    'react/jsx-runtime',
    'typescript',
    'vue',
    'vue-router'
  ],
  externalExtended = [],

  bundledPackages = undefined,
  rollupTypes = false,

  browserslistValue = '>= 5%',
  noDiscovery = true
} = {}) => defineConfig({
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
        if (!id.startsWith('.') && !path.isAbsolute(id)) {
          // return true
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
    noDiscovery,
    exclude: ['@napi-rs/canvas', 'fsevents']
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      // Настройки целей браузеров (автоматически берет из browserslist если не задано)
      targets: browserslistToTargets(browserslist((browserslistValue)))
    }
  },
  plugins: [
    vue(),
    dts({
      clearPureImport: true,
      copyDtsFiles: true,
      exclude: [
        ...exclude,
        ...excludeExtended
      ],
      include: [
        ...(Array.isArray(entry) ? entry : [entry]),
        ...include,
        ...includeExtended
      ],
      outDir: 'dist',
      bundledPackages,
      rollupTypes,
      staticImport: true,
      tsconfigPath: './tsconfig.app.json'
    }),
    vitePluginLibrary(fileCssName, fileLibraryName)
  ]
})

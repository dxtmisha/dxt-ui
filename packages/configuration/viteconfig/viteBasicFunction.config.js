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
  minify = true,

  isPluginLibrary = false,
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

  isExternalAll = true,
  external = [
    ...builtinModules,
    ...builtinModules.map(m => `node:${m}`)
  ],
  externalExtended = [],
  externalExclude = [
    '@babel/runtime',
    '@oxc-project/runtime',
    '@swc/helpers',
    'tslib'
  ],
  externalExcludeExtended = [],

  bundledPackages = undefined,
  bundleTypes = true,
  rollupTypes = false,

  browserslistValue = '>= 5%',
  noDiscovery = true
} = {}) => {
  const isBundleTypes = bundleTypes || rollupTypes
  const bundleTypesConfig = isBundleTypes
    ? (bundledPackages ? { bundledPackages } : true)
    : false

  const plugins = [
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
      bundleTypes: bundleTypesConfig,
      rollupTypes: isBundleTypes,
      staticImport: true,
      tsconfigPath: './tsconfig.app.json'
    })
  ]

  if (isPluginLibrary) {
    plugins.push(vitePluginLibrary(fileCssName, fileLibraryName))
  }

  return defineConfig({
    build: {
      minify,
      target,
      lib: {
        entry,
        name,
        formats: ['es'],
        fileName: (_, entryName) => `${entryName}.js`
      },
      rollupOptions: {
        external: (id) => {
          const excludesList = [
            ...externalExclude,
            ...externalExcludeExtended
          ]

          if (excludesList.some(excluded => id === excluded || id.startsWith(`${excluded}/`))) {
            return false
          }

          if (isExternalAll && !id.startsWith('.') && !path.isAbsolute(id)) {
            return true
          }

          const externalsList = [
            ...external,
            ...externalExtended
          ]

          return externalsList.some(ext => id === ext || id.startsWith(`${ext}/`))
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
        targets: browserslistToTargets(browserslist((browserslistValue)))
      }
    },
    plugins
  })
}

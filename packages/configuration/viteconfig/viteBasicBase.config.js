import { defineConfig } from 'vite'
import { builtinModules } from 'node:module'
import path from 'node:path'

import dts from 'vite-plugin-dts'

import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'

import { getLibraryEntries } from '../functions/getLibraryEntries.js'
import { vitePluginLibrary } from '../functions/vitePluginLibrary.js'
import { vitePluginStyle } from '../functions/vitePluginStyle.js'

// https://vite.dev/config/

/**
 * Creates a base Vite config for libraries (TypeScript, functions, composables, classes) without framework-specific plugins.
 *
 * Создаёт базовую конфигурацию Vite для библиотек (TypeScript, функции, композаблы, классы) без плагинов конкретных фреймворков.
 * @param {import('./viteBasicBase.config').ViteBasicBaseOptions} [options] configuration options / параметры конфигурации
 * @returns {import('vite').UserConfig} Vite config / конфигурация Vite
 */
export const viteBasicBase = ({
  entry = 'src/library.ts',
  name = 'dxt-ui',
  target = 'es2022',
  outDir = 'dist',
  minify = true,

  isLibraryEntries = false,
  isPluginLibrary = false,
  isPluginStyle = false,
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
  noDiscovery = true,

  cssCodeSplit = undefined,
  preserveModules = undefined,
  assetFileNames = undefined,

  plugins: pluginsOption = []
} = {}) => {
  const finalEntry = isLibraryEntries
    ? [
        ...getLibraryEntries(),
        ...(Array.isArray(entry) ? entry : (entry ? [entry] : []))
      ]
    : entry

  const isBundleTypes = bundleTypes || rollupTypes
  const bundleTypesConfig = isBundleTypes
    ? (bundledPackages ? { bundledPackages } : true)
    : false

  const plugins = [
    ...pluginsOption,
    dts({
      clearPureImport: true,
      copyDtsFiles: true,
      exclude: [
        ...exclude,
        ...excludeExtended
      ],
      include: [
        ...(Array.isArray(finalEntry) ? finalEntry : [finalEntry]),
        ...include,
        ...includeExtended
      ],
      // vite-plugin-dts v5+ / vite-plugin-dts v5+
      outDirs: outDir,
      bundleTypes: bundleTypesConfig,
      // vite-plugin-dts v4 (backward compatibility) / vite-plugin-dts v4 (обратная совместимость)
      outDir,
      bundledPackages,
      rollupTypes: isBundleTypes,
      staticImport: true,
      tsconfigPath: './tsconfig.app.json'
    })
  ]

  if (isPluginLibrary) {
    plugins.push(vitePluginLibrary(fileCssName, fileLibraryName))
  }

  if (isPluginStyle) {
    plugins.push(vitePluginStyle())
  }

  return defineConfig({
    build: {
      outDir,
      minify,
      target,
      ...(cssCodeSplit !== undefined && { cssCodeSplit }),
      lib: {
        entry: finalEntry,
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
          ...(preserveModules !== undefined && { preserveModules }),
          assetFileNames: assetFileNames !== undefined
            ? assetFileNames
            : (assetInfo) => {
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

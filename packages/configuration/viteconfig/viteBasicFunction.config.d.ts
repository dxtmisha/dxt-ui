import type { UserConfigExport } from 'vite'
import type { VitePluginLibraryTarget } from '../classes/VitePluginLibrary'

/** Options for base Vite library configuration / Параметры базовой конфигурации Vite для библиотек */
export interface ViteBasicFunctionOptions {
  /** Entry points / Входные точки сборки */
  entry?: string | string[] | Record<string, string>
  /** Global library name / Глобальное имя библиотеки */
  name?: string
  /** Build target / Цель сборки */
  target?: string
  /** Whether to minify the output / Минифицировать ли выходной код */
  minify?: boolean | 'esbuild' | 'terser'

  /** Whether to enable the library plugin (injecting styles into library bundle) / Подключать ли плагин библиотеки (внедрение стилей в бандл библиотеки) */
  isPluginLibrary?: boolean
  /** Name of the output CSS file / Имя выходного CSS файла */
  fileCssName?: string
  /** Target library file name(s) / Имя(имена) целевых файлов библиотеки */
  fileLibraryName?: VitePluginLibraryTarget

  /** Glob patterns for d.ts / Паттерны для генерации d.ts */
  include?: string[]
  /** Extra include patterns / Дополнительные паттерны включения */
  includeExtended?: string[]
  /** Patterns to exclude for d.ts / Паттерны исключения для d.ts */
  exclude?: string[]
  /** Extra exclude patterns / Дополнительные паттерны исключения */
  excludeExtended?: string[]

  /** Whether to automatically treat all bare imports (npm packages) as external / Автоматически ли считать все внешние npm-пакеты исключаемыми (external) */
  isExternalAll?: boolean

  /** External dependencies / Внешние зависимости */
  external?: string[]
  /** Extra external dependencies / Дополнительные внешние зависимости */
  externalExtended?: string[]

  /** Packages to bundle types for / Пакеты, типы которых нужно собрать */
  bundledPackages?: string[]
  /** Whether to bundle types into single declaration files / Объединять ли типы в единые файлы деклараций */
  bundleTypes?: boolean | Record<string, any>
  /** Whether to use rollupTypes in dts plugin (alias for bundleTypes) / Использовать ли rollupTypes в плагине dts */
  rollupTypes?: boolean

  /** Browserslist query / Запрос browserslist */
  browserslistValue?: string
  /** Disable automatic dependency discovery for pre-bundling / Отключить автоматическое сканирование зависимостей для пре-бандлинга */
  noDiscovery?: boolean
}

/****
 * Creates a base Vite config for libraries with functions/composables/classes.
 *
 * Создаёт базовую конфигурацию Vite для библиотек с функциями/композаблами/классами.
 * @param options configuration options / параметры конфигурации
 * @returns Vite config / конфигурация Vite
 */
export declare const viteBasicFunction: (
  options?: ViteBasicFunctionOptions
) => UserConfigExport

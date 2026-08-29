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

  /** External dependencies / Внешние зависимости */
  external?: string[]
  /** Extra external dependencies / Дополнительные внешние зависимости */
  externalExtended?: string[]

  /** Packages to bundle types for / Пакеты, типы которых нужно собрать */
  bundledPackages?: string[]
  /** Whether to use rollupTypes in dts plugin / Использовать ли rollupTypes в плагине dts */
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

import type { Rollup, UserConfig } from 'vite'
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

  /** Whether to automatically connect library entry points from src/library / Подключать ли автоматически точки входа библиотеки из src/library */
  isLibraryEntries?: boolean

  /** Whether to enable the library plugin (injecting styles into library bundle) / Подключать ли плагин библиотеки (внедрение стилей в бандл библиотеки) */
  isPluginLibrary?: boolean
  /** Whether to enable the style plugin (injecting styles into JS chunks) / Подключать ли плагин стилей (внедрение стилей в JS-чанки) */
  isPluginStyle?: boolean
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
  /** Packages to exclude from external (always bundle) / Пакеты, исключаемые из внешних зависимостей (всегда бандлятся) */
  externalExclude?: string[]
  /** Extra packages to exclude from external / Дополнительные пакеты, исключаемые из внешних зависимостей */
  externalExcludeExtended?: string[]

  /** Packages to bundle types for / Пакеты, типы которых нужно собрать */
  bundledPackages?: string[]
  /** Whether to bundle types into single declaration files / Объединять ли типы в единые файлы деклараций */
  bundleTypes?: boolean | Record<string, unknown>
  /** Whether to use rollupTypes in dts plugin (alias for bundleTypes) / Использовать ли rollupTypes в плагине dts */
  rollupTypes?: boolean

  /** Browserslist query / Запрос browserslist */
  browserslistValue?: string
  /** Disable automatic dependency discovery for pre-bundling / Отключить автоматическое сканирование зависимостей для пре-бандлинга */
  noDiscovery?: boolean

  /** Whether to enable CSS code splitting / Включать ли разделение CSS кода */
  cssCodeSplit?: boolean
  /** Whether to preserve module structure in output / Сохранять ли структуру исходных модулей в выводе */
  preserveModules?: boolean
  /** Asset file names pattern or function / Шаблон или функция для имен файлов ассетов */
  assetFileNames?: string | ((assetInfo: Rollup.PreRenderedAsset) => string)
}

/**
 * Creates a base Vite config for libraries with functions/composables/classes.
 *
 * Создаёт базовую конфигурацию Vite для библиотек с функциями/композаблами/классами.
 * @param options configuration options / параметры конфигурации
 * @returns Vite config / конфигурация Vite
 */
export declare const viteBasicFunction: (
  options?: ViteBasicFunctionOptions
) => UserConfig

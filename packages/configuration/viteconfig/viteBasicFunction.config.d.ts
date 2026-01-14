/****
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
export declare const viteBasicFunction: (
  name?: string,
  target?: string,
  entry?: string | string[] | Record<string, string>,
  include?: string[],
  includeExtended?: string[],
  external?: string[],
  externalExtended?: string[],
  fileCssName?: string,
  rollupTypes?: boolean
) => import('vite').UserConfigExport

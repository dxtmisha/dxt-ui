/****
 * Creates a base Vite config for libraries with functions/composables/classes.
 *
 * Создаёт базовую конфигурацию Vite для библиотек с функциями/композаблами/классами.
 * @param name global library name / глобальное имя библиотеки
 * @param entry entry points / входные точки сборки
 * @param include glob patterns for d.ts / паттерны для генерации d.ts
 * @param includeExtended extra patterns / дополнительные паттерны
 * @param external external libraries / внешние библиотеки
 * @param externalExtended extra libraries / дополнительные библиотеки
 * @returns Vite config / конфигурация Vite
 */
export declare const viteBasicFunction: (
  name?: string,
  entry?: string[],
  include?: string[],
  includeExtended?: string[],
  external?: string[],
  externalExtended?: string[]
) => import('vite').UserConfigExport

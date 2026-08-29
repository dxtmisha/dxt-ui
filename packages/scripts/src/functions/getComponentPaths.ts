// export:none

import { UI_DIRS_COMPONENTS } from '../config'

/**
 * Resolves full component directory path segments by combining base component directories with the specified path.
 *
 * Возвращает массив сегментов пути к компоненту, объединяя базовые директории компонентов с заданным путем.
 * @param path component subpath or name / подпуть или имя компонента
 * @returns array of directory path segments / массив сегментов пути директории
 */
export function getComponentPaths(path: string): string[] {
  return [...UI_DIRS_COMPONENTS, path]
}

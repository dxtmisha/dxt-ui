import { UI_DIRS_COMPONENTS } from '../config'

/**
 * Get component paths by combining UI_DIRS_COMPONENTS with the given path.
 *
 * Возвращает пути компонента, объединяя UI_DIRS_COMPONENTS с заданным путем.
 * @param path component path/ путь компонента
 */
export function getComponentPaths(path: string): string[] {
  return [...UI_DIRS_COMPONENTS, path]
}

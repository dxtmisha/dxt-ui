import requirePath from 'path'

/**
 * Convert path to use standard separators for the current OS.
 *
 * Преобразовать путь для использования стандартных разделителей для текущей ОС.
 * @param path The input path string/ Входная строка пути
 * @returns The path with standard separators/ Путь со стандартными разделителями
 */
export function toPathStandardSep(path: string): string {
  return path.replace('/', requirePath.sep)
}

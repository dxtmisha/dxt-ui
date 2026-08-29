// export:none

import requirePath from 'path'

/**
 * Converts path forward slashes to standard path separators for the current operating system.
 *
 * Преобразует прямые слеши пути в стандартные системные разделители для текущей операционной системы.
 * @param path input path string / входная строка пути
 * @returns normalized path string with OS-specific separators / нормализованная строка пути с системными разделителями
 */
export function toPathStandardSep(path: string): string {
  return path.replace(/\//g, requirePath.sep)
}

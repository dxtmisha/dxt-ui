// export:none

import { PropertiesFile, type PropertiesFilePath } from '../classes/Properties/PropertiesFile'

/**
 * Extracts the last directory or file name segment from the given path structure.
 *
 * Извлекает имя последнего сегмента директории или файла из заданной структуры пути.
 * @param paths array of path segments or single path string / массив сегментов пути или одиночная строка пути
 * @returns name of the last path segment / имя последнего сегмента пути
 */
export function getNameDirByPaths(paths: PropertiesFilePath): string {
  const dirs = PropertiesFile.splitForDir(
    PropertiesFile.joinPath(paths)
  )
  return dirs[dirs.length - 1]
}

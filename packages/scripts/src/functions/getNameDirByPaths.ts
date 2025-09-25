import { PropertiesFile, type PropertiesFilePath } from '../classes/Properties/PropertiesFile.ts'

/**
 * Get the name of the last directory from the given paths.
 *
 * Получить имя последней директории из заданных путей.
 * @param paths Array of path segments/ Массив сегментов пути
 */
export function getNameDirByPaths(paths: PropertiesFilePath) {
  const dirs = PropertiesFile.splitForDir(
    PropertiesFile.joinPath(paths)
  )
  return dirs[dirs.length - 1]
}

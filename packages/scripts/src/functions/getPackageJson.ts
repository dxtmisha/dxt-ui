import { PropertiesFile, type PropertiesFilePath } from '../classes/Properties/PropertiesFile'
import { UI_FILE_PACKAGE } from '../config'

/**
 * Returns the package.json file content.
 *
 * Возвращает содержимое файла package.json.
 * @param path path to directory or package.json file / путь к директории или файлу package.json
 */
export function getPackageJson(path?: PropertiesFilePath): Record<string, any> | undefined {
  if (path) {
    const targetPath = PropertiesFile.isDir(path)
      ? PropertiesFile.getPathFile(path, UI_FILE_PACKAGE, '')
      : path
    return PropertiesFile.readFile<Record<string, any>>(targetPath)
  }

  return PropertiesFile.readFile<Record<string, any>>(UI_FILE_PACKAGE)
}

import { PropertiesFile, type PropertiesFilePath } from '../classes/Properties/PropertiesFile'
import { UI_FILE_PACKAGE } from '../config'

/**
 * Reads and parses `package.json` file content for the specified path or project root.
 *
 * Считывает и парсит содержимое файла `package.json` для указанного пути или корня проекта.
 * @param path optional path to directory or package.json file / опциональный путь к директории или файлу package.json
 * @returns parsed package.json data object or undefined if not found / распарсенный объект данных package.json или undefined, если файл не найден
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

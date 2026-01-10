import { PropertiesFile } from '../classes/Properties/PropertiesFile'
import { UI_FILE_PACKAGE } from '../config'

/**
 * Returns the package.json file content.
 *
 * Возвращает содержимое файла package.json.
 */
export function getPackageJson(): Record<string, any> | undefined {
  return PropertiesFile.readFile<Record<string, any>>(UI_FILE_PACKAGE)
}

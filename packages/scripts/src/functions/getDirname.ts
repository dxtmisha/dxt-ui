import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { hasNativeDirname } from './hasNativeDirname'

/**
 * Resolves current directory path in both CommonJS and ES module environments.
 *
 * Получает путь к текущей директории в средах CommonJS и ES-модулей.
 * @returns directory path string / строка пути к директории
 */
export function getDirname(): string {
  if (hasNativeDirname()) {
    return __dirname
  }

  return dirname(fileURLToPath(import.meta.url))
}

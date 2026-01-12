import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { hasNativeDirname } from './hasNativeDirname'

/**
 * Gets the current directory name.
 *
 * Получает имя текущей директории.
 */
export function getDirname(): string {
  if (hasNativeDirname()) {
    return __dirname
  }

  return dirname(fileURLToPath(import.meta.url))
}

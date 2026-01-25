import path from 'node:path'
import fs from 'node:fs'

/**
 * Returns a list of library entry points.
 *
 * Возвращает список точек входа библиотеки.
 * @return string[]
 */
export const getLibraryEntries = () => {
  const dir = path.join('src', 'library')

  if (fs.existsSync(dir)) {
    return fs.readdirSync(dir)
      .filter(
        file =>
          file.endsWith('.ts')
          && !file.endsWith('.wiki.ts')
          && !file.endsWith('.d.ts')
      )
      .map(file => path.join(dir, file))
  }

  return []
}

import path from 'node:path'
import fs from 'node:fs'

/**
 * Returns a list of library entry points.
 *
 * Возвращает список точек входа библиотеки.
 * @return string[]
 */
export const getConstructorsEntries = () => {
  const dir = path.join('src', 'constructors')

  if (fs.existsSync(dir)) {
    return fs.readdirSync(dir)
      .map(file => path.join(dir, file, 'index.ts'))
  }

  return []
}

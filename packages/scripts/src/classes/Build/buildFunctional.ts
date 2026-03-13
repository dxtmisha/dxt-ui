import * as functional from '@dxtmisha/functional'

import { PropertiesFile } from '../Properties/PropertiesFile'

import { UI_DIRS_LIBRARY } from '../../config'

/**
 * A class for building the functional library exports.
 *
 * Класс для сборки экспортов функциональной библиотеки.
 */
export class BuildFunctional {
  constructor() {
  }

  /**
   * Generates the functional.ts file by re-exporting all members from @dxtmisha/functional.
   *
   * Генерирует файл functional.ts, повторно экспортируя все элементы из @dxtmisha/functional.
   */
  make(): void {
    console.log('Build functional...')

    const list = this.getList()
    const code: string[] = [
      'export type * from \'@dxtmisha/functional\'',
      ''
    ]

    list.sort()
    list.forEach((item) => {
      console.log(`-- ${item}`)

      code.push(`export { ${item} } from '@dxtmisha/functional'`)
    })

    code.push('')
    PropertiesFile.writeByPath(
      [...UI_DIRS_LIBRARY, 'functional.ts'],
      code.join('\n')
    )

    console.log('...end')
  }

  /**
   * Returns a list of all exported members from the @dxtmisha/functional package.
   *
   * Возвращает список всех экспортируемых элементов из пакета @dxtmisha/functional.
   */
  getList(): string[] {
    return Object.keys(functional)
  }
}

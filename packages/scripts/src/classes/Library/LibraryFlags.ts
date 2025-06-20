import { forEach, toCamelCaseFirst, toKebabCase } from '@dxt-ui/functional'
import flags from '@dxt-ui/media/flags'

import { LibraryItems } from './LibraryItems'

import { UI_FILE_NAME_FLAGS } from '../../config'

/**
 * Class for generating a file to connect flags.
 *
 * Класс для формирования файла для подключения флагов.
 */
export class LibraryFlags {
  /**
   * Constructor
   * @param items object for working with the list of components/ объект для работы со списком компонентов
   */

  constructor(
    protected readonly items: LibraryItems
  ) {
  }

  /**
   * Adds a file with flags.<br>
   * Добавляет файл с флагами.
   */
  make(): void {
    const data: string[] = []
    const json: string[] = []

    forEach(flags, (_, flag) => {
      const name = toCamelCaseFirst(flag.replace('.', '-'))
      const key = `flag-${toKebabCase(name.replace('Svg', ''))}`

      data.push(`  Icons.add('${key}', flags.${flag})`)
      json.push(key)
    })

    this.items.write(
      UI_FILE_NAME_FLAGS,
      [
        'import { Icons } from \'@dxt-ui/functional\'',
        'import flags from \'@dxt-ui/media/flags\'',
        '',
        'export const makeFlags = (): void => {',
        ...data,
        '}'
      ]
    )

    this.items.write(
      UI_FILE_NAME_FLAGS,
      [JSON.stringify(json)],
      'json'
    )
  }
}

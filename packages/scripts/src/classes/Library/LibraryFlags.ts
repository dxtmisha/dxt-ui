// export:none

import { forEach, toCamelCaseFirst, toKebabCase } from '@dxtmisha/functional-basic'
import flags from '@dxtmisha/media/flags'

import { LibraryItems } from './LibraryItems'

import { UI_FILE_NAME_FLAGS } from '../../config'

/**
 * Class for generating connection files for country flags and providing a list of flag identifiers.
 *
 * Класс для формирования файлов подключения флагов стран и предоставления списка идентификаторов флагов.
 */
export class LibraryFlags {
  /**
   * Constructor for LibraryFlags.
   *
   * Конструктор для LibraryFlags.
   * @param items object for working with the list of components / объект для работы со списком компонентов
   */
  constructor(
    protected readonly items: LibraryItems
  ) {
  }

  /**
   * Generates flag connection files (TypeScript) and a list of flag keys (JSON).
   *
   * Генерирует файлы подключения флагов (TypeScript) и список ключей флагов (JSON).
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
        'import { Icons } from \'@dxtmisha/functional\'',
        'import flags from \'@dxtmisha/media/flags\'',
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

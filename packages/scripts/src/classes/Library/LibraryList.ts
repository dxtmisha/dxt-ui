import { LibraryItems } from './LibraryItems'

import { forEach, toCamelCaseFirst, toKebabCase } from '@dxtmisha/functional-basic'
import { getPackageJson } from '../../functions/getPackageJson'

import { PropertiesConfig } from '../Properties/PropertiesConfig'

import { UI_FILE_NAME_LIST } from '../../config'

/**
 * Class for creating a file with a list of components.
 *
 * Класс для создания файла со списком компонентов.
 */
export class LibraryList {
  /**
   * Constructor
   * @param items object for working with the list of components / объект для работы со списком компонентов
   */

  constructor(
    protected readonly items: LibraryItems
  ) {
  }

  /**
   * Creates files with a list of components.
   *
   * Создает файлы со списком компонентов.
   */
  make(): this {
    const list = this.getComponents()

    this.items.write(
      UI_FILE_NAME_LIST,
      [
        `// count: ${this.items.getCount()}`,
        'export const componentsList: Record<string, string> = {',
        list.join(',\r\n'),
        '}'
      ]
    )

    return this
  }

  /**
   * Returns a list of components for the file.
   *
   * Возвращает список компонентов для файла.
   */
  protected getComponents(): string[] {
    const packageName = getPackageJson()?.name
    const list: string[] = []

    if (packageName) {
      const alternativeNameList = PropertiesConfig.getDesignAlternativeName()

      forEach(
        this.items.getComponentList(),
        (item) => {
          const name = toCamelCaseFirst(item.codeFull)
          const codeImport = `'import { ${name} } from \\'${packageName}/${name}\\''`

          list.push(
            `  '${name}': ${codeImport}`,
            `  '${toKebabCase(item.codeFull)}': ${codeImport}`
          )

          if (alternativeNameList) {
            alternativeNameList.forEach((design) => {
              const alternativeName = `${design}-${item.name}`
              list.push(
                `  '${toCamelCaseFirst(alternativeName)}': ${codeImport}`,
                `  '${toKebabCase(alternativeName)}': ${codeImport}`
              )
            })
          }
        })
    }

    return list
  }
}

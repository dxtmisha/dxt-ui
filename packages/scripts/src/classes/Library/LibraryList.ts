import { LibraryItems } from './LibraryItems'

import { forEach, toCamelCaseFirst, toKebabCase } from '@dxtmisha/functional-basic'
import { getPackageJson } from '../../functions/getPackageJson'

import { PropertiesConfig } from '../Properties/PropertiesConfig'

import { UI_FILE_NAME_DESIGN } from '../../config'
import type { LibraryData } from '../../types/libraryTypes.ts'

/**
 * Class for creating a file with a list of components.
 *
 * Класс для создания файла со списком компонентов.
 */
export class LibraryList {
  protected readonly packageName: string

  /**
   * Constructor
   * @param items object for working with the list of components / объект для работы со списком компонентов
   */
  constructor(
    protected readonly items: LibraryItems
  ) {
    this.packageName = getPackageJson()?.name
  }

  /**
   * Creates files with a list of components.
   *
   * Создает файлы со списком компонентов.
   */
  make(): this {
    const list = this.getComponents()
    const listReg = this.getComponentsReg()
    const listRegCode = this.getComponentsRegCode()

    this.items.write(
      UI_FILE_NAME_DESIGN,
      [
        `// count: ${this.items.getCount()}`,
        `export const packageName: string = '${this.packageName}'`,
        `export const componentsReg: RegExp = /(${listReg.join('|')})(?![\\w\\W-])/g`,
        `export const componentsRegCode: RegExp = /(${listRegCode.join('|')})(?![\\w\\W-])/g`,
        '',
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
    const list: string[] = []

    if (this.packageName) {
      forEach(
        this.items.getComponentList(),
        (item) => {
          const name = toCamelCaseFirst(item.codeFull)
          const names = this.getNames(item)
          const codeImport = `'import { ${name} } from \\'${this.packageName}/${name}\\''`

          names.forEach(
            (name) => {
              list.push(`  '${toCamelCaseFirst(name)}': ${codeImport}`)
              list.push(`  '${toKebabCase(name)}': ${codeImport}`)
            }
          )
        })
    }

    return list
  }

  protected getComponentsRegCode(): string[] {
    return forEach(
      this.items.getComponentList(),
      (item) => {
        return forEach(
          this.getNames(item),
          name => toCamelCaseFirst(name)
        ).join('|')
      }
    )
  }

  protected getComponentsReg(): string[] {
    return forEach(
      this.items.getComponentList(),
      (item) => {
        return forEach(
          this.getNames(item),
          name => `${toCamelCaseFirst(name)}|${toKebabCase(name)}`
        ).join('|')
      }
    )
  }

  protected getNames(item: LibraryData) {
    const alternativeNameList = PropertiesConfig.getDesignAlternativeName()
    const names: string[] = [
      item.codeFull
    ]

    if (alternativeNameList) {
      alternativeNameList.forEach(
        design => names.push(`${design}-${item.name}`)
      )
    }

    return names
  }
}

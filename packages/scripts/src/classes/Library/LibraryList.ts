import { LibraryItems } from './LibraryItems'

import { forEach, toCamelCase, toKebabCase, uniqueArray } from '@dxtmisha/functional-basic'
import { getPackageJson } from '../../functions/getPackageJson'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'

import { UI_DIRS_STYLES, UI_FILE_NAME_DESIGN } from '../../config'

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

    this.items.write(
      UI_FILE_NAME_DESIGN,
      [
        'import type { LibraryComponentImports } from \'@dxtmisha/scripts\'',
        '',
        `// count: ${this.items.getCount()}`,
        `export const designName: string = '${PropertiesConfig.getDesignName()}'`,
        `export const packageName: string = '${this.packageName}'`,
        `export const componentsReg: RegExp = ${listReg}`,
        '',
        'export const componentsList: LibraryComponentImports = [',
        list.join(',\r\n'),
        ']',
        '',
        'export const styleVars: string[] = [',
        this.getVars().join(',\r\n'),
        ']'
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
          list.push(`  {
    name: '${item.codeFull}',
    reg: ${this.getReg([item.name], true)}
  }`
          )
        })
    }

    return list
  }

  /**
   * Returns a regular expression for all components.
   *
   * Возвращает регулярное выражение для всех компонентов.
   */
  protected getComponentsReg(): string {
    const names: string[] = forEach(
      this.items.getComponentList(),
      item => item.name
    )

    return this.getReg(names)
  }

  /**
   * Returns a list of design names.
   *
   * Возвращает список названий дизайнов.
   */
  protected getDesigns(): string[] {
    return [
      PropertiesConfig.getDesignName(),
      ...(PropertiesConfig.getDesignAlternativeName() ?? [])
    ]
  }

  /**
   * Generates a regular expression for the list of names.
   *
   * Генерирует регулярное выражение для списка имен.
   * @param names list of names / список имен
   * @param only exact match / точное совпадение
   */
  protected getReg(
    names: string[],
    only: boolean = false
  ): string {
    const designs = this.getDesigns().join('|')
    const namesReg = this.getRegName(names)
    let code = `((${designs})-?(${namesReg}))`

    if (only) {
      code = `^${code}$`
    }

    return `/${code}/ig`
  }

  /**
   * Formats names for regular expression.
   *
   * Форматирует имена для регулярного выражения.
   * @param names list of names / список имен
   */
  protected getRegName(names: string[]): string {
    return forEach(
      names,
      name => toKebabCase(name)
        .replace('-', '-?')
    ).join('|')
  }

  /**
   * Returns a list of CSS variables.
   *
   * Возвращает список CSS переменных.
   */
  protected getVars(): string[] {
    const design: string = toCamelCase(PropertiesConfig.getDesignName())
    const path = [...UI_DIRS_STYLES, PropertiesConfig.getProjectName(), 'vars.scss']
    const context = PropertiesFile.readFileOnly(path)
    const data: string[] = []

    if (context) {
      const vars = context.match(/(?<=--)[^: ]+(?=:)/g)

      if (vars) {
        vars.forEach((varName) => {
          const value = varName.match(/^([^-]+)-(.*?)$/)

          if (
            value
            && value?.[1] === design
            && value?.[2]
          ) {
            const varName = value[2].split('-')

            if (varName.length > 2) {
              varName.pop()
            }

            data.push(`  '${varName.join('-')}'`)
          }
        })
      }
    }

    return uniqueArray(data)
  }
}

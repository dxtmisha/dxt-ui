import { LibraryItems } from './LibraryItems'

import { forEach, toCamelCase, toCamelCaseFirst, toKebabCase, uniqueArray } from '@dxtmisha/functional-basic'
import { getPackageJson } from '../../functions/getPackageJson'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'

import type { LibraryData } from '../../types/libraryTypes'

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
    const listRegCode = this.getComponentsRegCode()

    this.items.write(
      UI_FILE_NAME_DESIGN,
      [
        'import type { LibraryComponentList } from \'@dxtmisha/scripts\'',
        '',
        `// count: ${this.items.getCount()}`,
        `export const designName: string = '${PropertiesConfig.getDesignName()}'`,
        `export const packageName: string = '${this.packageName}'`,
        `export const componentsReg: RegExp = /(${listReg.join('|')})(?![\\w\\W-])/g`,
        `export const componentsRegCode: RegExp = /(${listRegCode.join('|')})(?![\\w\\W-])/g`,
        '',
        'export const componentsList: LibraryComponentList = {',
        list.join(',\r\n'),
        '}',
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
          const name = toCamelCaseFirst(item.codeFull)
          const names = this.getNames(item)
          const path = `${this.packageName}/${name}`
          const codeImport = (code: string) => `{
    name: '${name}',
    alternativeName: //i,
    code: '${code}',
    path: '${path}',
    importPath: 'import { ${name} } from \\'${path}\\''
  }`

          names.forEach(
            (name) => {
              const code = toCamelCaseFirst(name)

              list.push(`  '${toCamelCaseFirst(name)}': ${codeImport(code)}`)
              list.push(`  '${toKebabCase(name)}': ${codeImport(code)}`)
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
      item.codeFull,
      toKebabCase(item.codeFull)
    ]

    if (alternativeNameList) {
      alternativeNameList.forEach(
        (design) => {
          const name = `${design}-${item.name}`
          names.push(
            toCamelCaseFirst(name),
            toKebabCase(name)
          )
        }
      )
    }

    return names
  }

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

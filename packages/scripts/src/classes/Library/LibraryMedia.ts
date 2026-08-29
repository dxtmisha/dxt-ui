// export:none

import { toCamelCase, toCamelCaseFirst } from '@dxtmisha/functional-basic'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'

import { LibraryItems } from './LibraryItems'

import { UI_DIRS_ICONS, UI_FILE_NAME_MEDIA, UI_FILE_NAME_STYLE } from '../../config'
import type { LibraryIconItem } from '../../types/libraryTypes'

/**
 * Class for generating connection files for media data (primarily icons) and style entry points.
 *
 * Класс для формирования файлов подключения медиа-данных (прежде всего иконок) и точек входа стилей.
 */
export class LibraryMedia {
  /**
   * Constructor for LibraryMedia.
   *
   * Конструктор для LibraryMedia.
   * @param items object for working with the list of components / объект для работы со списком компонентов
   */
  constructor(
    protected readonly items: LibraryItems
  ) {
  }

  /**
   * Generates media connection files and style entries.
   *
   * Генерирует файлы подключения медиа и записи стилей.
   */
  make(): void {
    const projectName = toCamelCaseFirst(PropertiesConfig.getProjectName())
    const name = toCamelCase(PropertiesConfig.getDesignName())
    const isIcons = this.getIconImport().length > 0

    if (isIcons) {
      this.items.write(
        UI_FILE_NAME_MEDIA,
        [
          'import { Icons } from \'@dxtmisha/functional\'',
          '',
          ...this.initIconImport(),
          '',
          `export const ${name}MakeIcons = (): void => {`,
          ...this.initIcon(),
          '}'
        ]
      )
    }

    this.items.write(
      UI_FILE_NAME_STYLE,
      [
        `import '../styles/${projectName}/main.scss'`
      ]
    )
  }

  /**
   * Returns the list of available icons.
   *
   * Возвращает список доступных иконок.
   * @returns array of library icon items / массив элементов иконок библиотеки
   */
  private getIconImport(): LibraryIconItem[] {
    const data: LibraryIconItem[] = []
    const path = [PropertiesFile.getRoot(), ...UI_DIRS_ICONS]

    if (PropertiesFile.is(path)) {
      PropertiesFile
        .readDirRecursive(path)
        .forEach((iconPath) => {
          const icon = iconPath.replace('/', '-')

          data.push({
            name: toCamelCase(this.getIconName(icon)),
            path: this.getIconPath(iconPath),
            value: this.getIconName(icon)
          })
        })
    }

    return data
  }

  /**
   * Returns the icon name without extension.
   *
   * Возвращает название иконки без расширения.
   * @param icon icon filename / имя файла иконки
   * @returns icon name / название иконки
   */
  private getIconName(icon: string): string {
    return icon
      .replace(/\.[^.]+$/, '')
  }

  /**
   * Returns the relative path to the icon file.
   *
   * Возвращает относительный путь к файлу иконки.
   * @param icon icon filename / имя файла иконки
   * @returns relative path string / строка относительного пути
   */
  private getIconPath(icon: string): string {
    return PropertiesFile.joinPath(['.', '..', '..', ...UI_DIRS_ICONS, icon])
  }

  /**
   * Generates the code to register icons in the Icons registry.
   *
   * Создаёт код для регистрации иконок в реестре Icons.
   * @returns array of registration code lines / массив строк кода регистрации
   */
  private initIcon(): string[] {
    const data: string[] = []

    this.getIconImport().forEach((item) => {
      data.push(`  Icons.add('${item.value}', ${item.name})`)
    })

    return data
  }

  /**
   * Generates dynamic import statements for icons.
   *
   * Создаёт инструкции динамического импорта для иконок.
   * @returns array of import code lines / массив строк кода импорта
   */
  private initIconImport(): string[] {
    const data: string[] = []

    this.getIconImport().forEach((item) => {
      data.push(`const ${item.name} = async () => (await import('${item.path}'))?.default`)
    })

    return data
  }
}

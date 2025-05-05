import { type Item, toCamelCase } from '@dxt-ui/functional'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'

import { LibraryItems } from './LibraryItems'

import { UI_DIRS_ICONS, UI_DIRS_TOKENS, UI_FILE_NAME_MEDIA } from '../../config'

/**
 * Class for generating the media data connection file.
 *
 * Класс для формирования файла подключения медиа-данных.
 */
export class LibraryMedia {
  /**
   * Constructor
   * @param items object for working with the list of components/ объект для работы со списком компонентов
   */

  constructor(
    protected readonly items: LibraryItems
  ) {
  }

  make(): void {
    const name = toCamelCase(PropertiesConfig.getDesignName())

    this.items.write(
      UI_FILE_NAME_MEDIA,
      [
        'import { Icons } from \'@dxt-ui/functional\'',
        '',
        ...this.initIconImport(),
        '',
        `export const ${name}MakeIcons = (): void => {`,
        ...this.initIcon(),
        '}'
      ]
    )
  }

  /**
   * Returns the list of available icons.
   *
   * Возвращает список доступных иконок.
   */
  private getIconImport() {
    const data: Item<string>[] = []
    const path = [PropertiesFile.getRoot(), ...UI_DIRS_ICONS]

    if (PropertiesFile.is(path)) {
      PropertiesFile
        .readDirRecursive(path)
        .forEach((iconPath) => {
          const icon = iconPath.replace('/', '-')

          data.push({
            index: toCamelCase(this.getIconName(icon)),
            value: icon
          })
        })
    }

    return data
  }

  /**
   * Returns the icon name.
   *
   * Возвращает название иконки.
   * @param icon icon name/ название иконки
   */
  private getIconName(icon: string): string {
    return icon
      .replace(/\.[^.]+$/, '')
  }

  /**
   * Returns the path to the icon.
   *
   * Возвращает путь к иконке.
   * @param icon icon name/ название иконки
   */
  private getIconPath(icon: string): string {
    return PropertiesFile.joinPath(['.', '..', '..', ...UI_DIRS_TOKENS, icon])
  }

  /**
   * Generates the code to add the icon.
   *
   * Создаёт код для добавления иконки.
   */
  private initIcon(): string[] {
    const data: string[] = []

    this.getIconImport().forEach((item) => {
      data.push(`  Icons.add('${this.getIconName(item.value)}', ${item.index})`)
    })

    return data
  }

  /**
   * Generates the code to connect the icon.
   *
   * Создаёт код для подключения иконки.
   */
  private initIconImport(): string[] {
    const data: string[] = []

    this.getIconImport().forEach((item) => {
      data.push(`import ${item.index} from '${this.getIconPath(item.value)}'`)
    })

    return data
  }
}

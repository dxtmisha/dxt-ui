import { strFill } from '@dxtmisha/functional'

import { PropertiesConfig } from '../Properties/PropertiesConfig'

import { UI_DIRS_STYLES } from '../../config'

const SPACE = '  '

/**
 * CSS style processing class.
 *
 * Класс с базовыми функциями для обработки стилей.
 */
export class StylesTool {
  /**
   * Getting a directory to store a file.
   *
   * Получение директории для хранения файла.
   */
  static getDir(): string[] {
    return [...UI_DIRS_STYLES, PropertiesConfig.getProjectName()]
  }

  /**
   * Returns a space.
   *
   * Возвращает пробел
   */
  static getSpace(): string {
    return SPACE
  }

  /**
   * Getting an indent.
   *
   * Получение отступа.
   * @param level level/ уровень
   */
  static addSpace(level: number): string {
    return strFill(SPACE, level)
  }

  /**
   * Код строки для импорта файла.
   *
   * Code line for file import.
   * @param path path to the file/ путь к файлу
   */
  static addImport(path: string): string {
    return `@import "${path}";`
  }

  /**
   * Код строки для импорта файла.
   *
   * Code line for file import.
   * @param path path to the file/ путь к файлу
   */
  static addUse(path: string): string {
    return `@use "${path}";`
  }

  /**
   * Код строки для импорта файла.
   *
   * Code line for file import.
   * @param path path to the file/ путь к файлу
   */
  static addForward(path: string): string {
    return `@forward "${path}";`
  }

  /**
   * Getting a reference to a base function.
   *
   * Получение ссылки на базовую функцию.
   */
  static addImportProperties(): string {
    return '@use "@dxtmisha/styles" as ui;'
  }

  /**
   * Combines the elements of an array into one string.
   *
   * Объединяет элементы массива в одну строку.
   * @param data array containing records/ массив, содержащий записи
   */
  static join(data: string[]): string {
    return data.join('\r\n')
  }

  /**
   * Adding an access level.
   *
   * Добавление уровня доступа.
   * @param space space/ пробел
   */
  static increaseSpace(space: string): string {
    return `${space}${SPACE}`
  }

  static toFunctionCss(value: string): string {
    if (value.match(/@[a-zA-Z0-9.]+\(.*?\)( |,|$)/)) {
      return value
        .replace(/@([a-zA-Z0-9.]+\(.*?\))( |,|$)/g, '#{$1}$2')
    }

    return value
  }
}
